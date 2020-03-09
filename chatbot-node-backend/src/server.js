/***
 * This is the chatbot server entry point file
 * 
 * ExpressJs server listening to the port supplied by environment variable
 * Fallback port is 5000
 * 
 * @created at 3:16 AM 07/03/2020 (DD/MM/YYYY)
 * @author Arpan
 */
import express from "express";
import router from "./router-controller/router";
import dotenv from "dotenv";

// Replicate environment from dotenv file to current server process by calling config method
dotenv.config();

// Creating instant of express server
const app = express();

/***
 * This section contains middleweres used for the app
 */

 // Injecting route controller middlewere
app.use(router);

app.listen(
    process.env.PORT || 5000 , 
    ()=> console.log(`Server running on port ${process.env.PORT}`)
);
