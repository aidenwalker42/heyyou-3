import express from 'express'

import {loadCustomerContactCollection, loadWebsiteModificationCollection} from '../../server/loadCollections.js';


const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    res.status(201).send("Hello world")
})

//Add Post
router.post('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()

    // Checking for string only
    if (
        typeof req.body.name == "string" &&
        typeof req.body.email == "string" &&
        typeof req.body.message == "string"
    ) {
        // Inserting new document
        customerContactCol.insertOne({ 
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        // Success
        res.status(201).send({msg: "Update Successful!"})
    } else {
        // Invalid type
        res.status(406).send({msg: "Invalid Data"})
    }
})

//Update Post

//Delete Post


export {router}
//module.exports = router;