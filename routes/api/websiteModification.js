import express from 'express'

import {loadCustomerContactCollection, loadWebsiteModificationCollection} from '../../server/loadCollections.js';


const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    res.status(201).send("Hello world")
})

//Add Post
router.post('/', async (req, res) => {
    //Need to categorize....
    //Based on page??
    let exampleData = {
        pages: {
            "home": {
                Title: ""
            },
            "brands": [
                {
                    name: "",
                    mainDesc1: "",
                }
            ]
        }
    }
})

//Update Post

//Delete Post


export {router}
//module.exports = router;