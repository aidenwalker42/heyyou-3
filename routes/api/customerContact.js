import express from 'express'

import {loadCustomerContactCollection, loadWebsiteModificationCollection} from '../../server/loadCollections.js';

import { DFCCC } from '../../server/dataFormatChecking/dfcCustomerContact.js'

let sampleData = {
    submissionType: "retailer",
    companyName: "Example Corp",
    companyWebsite: "https://example.com",
    registeredBusinessAddress: "123 Business St, Dallas, TX 75201",
    companyType: "LLC",
    tinOrEin: "12-3456789",
    contactPerson: {
      name: "John Doe",
      title: "CEO",
      email: "john.doe@example.com",
      linkedIn: "https://www.LinkedIn.com",
      phoneNumber: "123",
    },
    message: "Hello, we are interested in partnering with your company.",
    time: "3:30pm",
  }

const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()
    res.status(201).send("Hello world")
})

//Add Post
router.post('/', async (req, res) => {
    const customerContactCol = await loadCustomerContactCollection()
    // Checking for string only
    if (DFCCC(req.body)) {
        // Inserting new document
        customerContactCol.insertOne(req.body)
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