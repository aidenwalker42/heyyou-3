import express from 'express'

import { loadCustomerContactCollection, loadWebsiteModificationCollection } from '../../server/loadCollections.js';

import { DFCCC } from '../../server/dataFormatChecking/dfcCustomerContact.js'
import { checkCredentials } from '../../server/checkCredentials.js';



const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()
    // first checking account
    if(await checkCredentials(req.query.username, req.query.password)) {
        // Getting data
        let posts = await customerContactCol.find({submissionType: req.query.category}).toArray()
        res.status(201).send({posts: posts, msg: "Success"})
    } else{
        res.status(401).send({msg: "Invalid Account!"})
    }
})

//Add Post
router.post('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()
    // Checking for proper object
    console.log(req.body)
    let objAnalysis = await DFCCC(req.body)
    if (objAnalysis == "Valid") {
        // Inserting new document
        customerContactCol.insertOne(req.body)
        // Success
        console.log("Accept")
        res.status(201).send({msg: "Update Successful!"})
    } else {
        // Invalid type
        console.log(objAnalysis)
        res.status(406).send({msg: objAnalysis})
    }
})

//Update Post

//Delete Post


export {router}
//module.exports = router;