import express from 'express'

import { checkCredentials } from '../../server/checkCredentials.js';
import {loadWebsiteModificationCollection} from '../../server/loadCollections.js';


const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    let data
    switch(req.body.getType) {
        case "getNames":
            data = await getPageNames()
        case "getBrandData":
            data = await getBrandData(req.body.pageName)
        case "getAllProducts":
            data = await getAllProducts()
        default:
            res.status(401).send({msg: "Invalid getType"})
    }
    res.status(201).send(data)
})

// Add Post
// New Product
router.post('/', async (req, res) => {
    // Give Pages pageName's
    if (await checkCredentials(req.body.username, req.body.password)) {
        const websiteModPosts = await loadWebsiteModificationCollection()

        // Checking for duplicate pageName
        let websiteData = await websiteModPosts.find({pageName: req.body.pageName}).toArray()
        if(websiteData.length == 0){
            await websiteModPosts.insertOne(req.body.post)
        } else {
            res.status(406).send({msg: "Duplicate Page Name"})
        }
        
    }
})

// Update Post
// Update Product
router.put('/', async (req, res) => {
    if (await checkCredentials(req.body.username, req.body.password)) {
        const websiteModPosts = await loadWebsiteModificationCollection()

        let websiteData = await websiteModPosts.updateOne({pageName: req.body.pageName}, req.body.post)
        res.status(201).send("Post Updated")
    }
})

//Delete Post
router.delete('/', async (req, res) => {
    if (await checkCredentials(req.body.username, req.body.password)) {
        const websiteModPosts = await loadWebsiteModificationCollection()

        let websiteData = await websiteModPosts.remove({pageName: req.body.pageName})
        res.status(201).send("Post Removed")
    }
})

// Get Requests
// Get pageName's for product list.
async function getPageNames() {
    const websiteModPosts = await loadWebsiteModificationCollection()
    
    let posts = websiteModPosts.find({}).toArray()

    // Building Name list from list of posts.
    let pageNamesList = []
    for (let post of posts) {
        pageNamesList.push(post.pageName)
    }
    return pageNamesList
}

async function getAllProducts() {
    const websiteModPosts = await loadWebsiteModificationCollection()

    let posts = await websiteModPosts.find({}).toArray()

    return posts
}

// Get product data for whatever bullshit
async function getBrandData(pageName) {
    const websiteModPosts = await loadWebsiteModificationCollection()
    
    // Simple, getting and returning data of the associated pageName.
    let post = await websiteModPosts.find({pageName: pageName}).toArray()

    return post[0]
}


export {router}
//module.exports = router;