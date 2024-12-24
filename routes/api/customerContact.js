import express from 'express'

import {loadCustomerContactCollection, loadWebsiteModificationCollection} from '../../server/loadCollections.js';

import { DFCCC } from '../../server/dataFormatChecking/dfcCustomerContact.js'



const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()
    res.status(201).send("Hello world")
})

//Add Post
router.post('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()
    // Checking for proper object
    let objAnalysis = DFCCC(req.body)
    if (objAnalysis == "Valid") {
        // Inserting new document
        customerContactCol.insertOne(req.body)
        // Success
        res.status(201).send({msg: "Update Successful!"})
    } else {
        // Invalid type
        res.status(406).send({msg: objAnalysis})
    }
})

//Update Post

//Delete Post


export {router}
//module.exports = router;