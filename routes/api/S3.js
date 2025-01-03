import express from 'express'
import aws from 'aws-sdk'

import { checkCredentials } from '../../server/checkCredentials.js';



const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    // Simply Checking if username and password are valid login.
    if (await checkCredentials(req.query.username, req.query.password)) {
        // Code here
        console.log(req.query)
        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: process.env.S3_BUCKET,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if(err){
                console.log(err);
                return res.end();
                return;
            }
            const returnData = {
            signedRequest: data,
            url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${fileName}`
            };
            res.write(JSON.stringify(returnData));
            res.end();
        });


        //res.status(201).send({msg: "Image Retreival Successful!"})
    } else {
        console.log("Invalid Credentials")
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