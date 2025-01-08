import express from 'express'

import { checkCredentials } from '../../server/checkCredentials.js';
import {loadWebsiteModificationCollection} from '../../server/loadCollections.js';


const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    let data
    switch(req.body.getType) {
        case "getNames":
            data = await getNames()
        case "getProductData":
            data = await getProductData(req.body.id)
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
    // Give Pages Id's
    if (await checkCredentials(req.body.username, req.body.password)) {
        const websiteModPosts = await loadWebsiteModificationCollection()

        // Checking for duplicate id
        let websiteData = await websiteModPosts.find({id: req.body.id}).toArray()
        if(websiteData.length == 0){
            await websiteModPosts.insertOne(req.body.post)
        } else {
            res.status(406).send({msg: "Duplicate id"})
        }
        
    }
})

// Update Post
// Update Product
router.put('/', async (req, res) => {
    // Give Pages Id's
    if (await checkCredentials(req.body.username, req.body.password)) {
        const websiteModPosts = await loadWebsiteModificationCollection()

        let websiteData = await websiteModPosts.updateOne({id: req.body.id}, req.body.post)
        res.status(201).send("Post Updated")
    }
})

//Delete Post
router.delete('/', async (req, res) => {
    // Give Pages Id's
    if (await checkCredentials(req.body.username, req.body.password)) {
        const websiteModPosts = await loadWebsiteModificationCollection()

        let websiteData = await websiteModPosts.remove({id: req.body.id})
        res.status(201).send("Post Removed")
    }
})

// Get Requests
// Get id's for product list.
async function getIds() {
    const websiteModPosts = await loadWebsiteModificationCollection()
    
    let posts = websiteModPosts.find({}).toArray()

    // Building Name list from list of posts.
    let idsList = []
    for (let post of posts) {
        idsList.push(post.id)
    }
    return idsList
}

async function getAllProducts() {
    const websiteModPosts = await loadWebsiteModificationCollection()

    let posts = await websiteModPosts.find({}).toArray()

    return posts
}

// Get product data for whatever bullshit
async function getProductData(id) {
    const websiteModPosts = await loadWebsiteModificationCollection()
    
    // Simple, getting and returning data of the associated id.
    let post = await websiteModPosts.find({id: id}).toArray()

    return post[0]
}


export {router}
//module.exports = router;