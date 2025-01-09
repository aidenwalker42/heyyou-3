import express from "express";
import aws from "aws-sdk";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import rateLimit from "express-rate-limit";
import "dotenv/config.js";
import { fileURLToPath } from "url";
import axios from "axios";

// Setting up __dirname for ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  message: "Too many requests from this IP, please try again later.",
});

aws.config.region = "eu-west-1";

//Middleware
app.use(express.json({ limit: "16mb" }));
app.use(express.urlencoded({ limit: "16mb", extended: true }));
app.use(bodyParser.json());
app.use(limiter);
app.use(cors());

//Cors bullshit
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Add a route to fetch the BunnyCDN JSON file
app.get("/api/bunnycdn/json", async (req, res) => {
  try {
    const response = await axios.get(
      "https://storage.bunnycdn.com/heyyou1/json/main.json",
      {
        headers: {
          AccessKey: "53295af0-2b0d-4032-8da5fa014809-d450-470e",
          Accept: "*/*",
        },
      }
    );
    res.json(response.data); // Forward the response from BunnyCDN to the client
  } catch (error) {
    console.error("Error fetching BunnyCDN data:", error.message);
    res.status(500).json({
      message: "Failed to fetch data from BunnyCDN",
      error: error.message,
    });
  }
});

import { router as customerContact } from "./routes/api/customerContact.js";
import { router as websiteModification } from "./routes/api/websiteModification.js";
import { router as admins } from "./routes/api/admins.js";
import { router as S3 } from "./routes/api/S3.js";

app.use("/api/customerContact", customerContact);
app.use("/api/websiteModification", websiteModification);
app.use("/api/admins", admins);
app.use("/api/S3", S3);

// Handle Production (Basically this directs any route to index.html? Which I think vue handles with vue router or whatever)

if (process.env.NODE_ENV === "production") {
  // Static Folder
  app.use(express.static(path.join(__dirname + "/front-end/")));

  // Handle SPA
  app.get(/.*/, (req, res) =>
    res.sendFile(path.join(__dirname + "/front-end/index.html"))
  );
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port " + port));
