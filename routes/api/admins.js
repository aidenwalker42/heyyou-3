import express from 'express'

import {loadAdminsCollection} from '../../server/loadCollections.js';

import { checkCredentials } from '../../server/checkCredentials.js';


const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    // Simply Checking if username and password are valid login.
    if (await checkCredentials(req.query.username, req.query.password)) {
        res.status(201).send({msg: "Login Successful!"})
    } else {
        res.status(401).send({msg: "Invalid Credentials!"})
    }
})

//Add Post
router.post('/', async (req, res) => {
    // Creating new account...
    const adminsCol = await loadAdminsCollection()
    if(await checkCredentials(req.body.username, req.body.password)) {
        adminsCol.insertOne({username: req.body.newUsername, password: req.body.newPassword})
    } else {
        res.status(401).send({msg: "Invalid Account!"})
    }
})

//Update Post
router.put('/', async (req, res) => {
    // Updating Credentials
    const adminsCol = await loadAdminsCollection()
    if(checkCredentials(req.body.username, req.body.password)) {
        adminsCol.updateOne({username: req.body.newUsername, password: req.body.newPassword})
    } else {
        res.status(401).send({msg: "Invalid Account!"})
    }
})
//Delete Post


export {router}
//module.exports = router;