import express from 'express'

import { checkCredentials } from '../../server/checkCredentials.js';



const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    // Simply Checking if username and password are valid login.
    if (await checkCredentials(req.query.username, req.query.password)) {
        // Code here


        res.status(201).send({msg: "Image Retreival Successful!"})
    } else {
        res.status(401).send({msg: "Invalid Credentials!"})
    }
})

//Add Post
router.post('/', async (req, res) => {
    // Checking Account...
    if(await checkCredentials(req.body.username, req.body.password)) {
        // Code here


        res.status(201).send({msg: "Image Upload Successful!"})
    } else {
        res.status(401).send({msg: "Invalid Account!"})
    }
})

export {router}