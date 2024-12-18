import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

// Setting up __dirname for ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Middleware
app.use(express.json({limit: '16mb'}));
app.use(express.urlencoded({limit: '16mb', extended: true}));
app.use(bodyParser.json())
app.use(cors())

import {router as customerContact} from './routes/api/customerContact.js'
import {router as websiteModification} from './routes/api/websiteModification.js'

app.use('/api/customerContact', customerContact)
app.use('/api/websiteModification', websiteModification)

// Handle Production (Basically this directs any route to index.html? Which I think vue handles with vue router or whatever)

if(process.env.NODE_ENV === 'production') {
  // Static Folder
  app.use(express.static(path.join(__dirname + '/public/')))

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server started on port ' + port))