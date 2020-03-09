/**
 * Watson Discovery Client configuration client
 * 
 * @created at 3:40 PM 09/03/2020 (DD/MM/YYYY)
 * @author Arpan
 */
import DiscoveryV2 from 'ibm-watson/discovery/v2';
import { IamAuthenticator } from 'ibm-watson/auth';
import dotenv from "dotenv";

// Sync with .env process config
dotenv.config();

console.log("watson api key = " ,process.env.WATSON_API_KEY);

// Create an instance of discovery client
const discoveryClient = new DiscoveryV2({
  authenticator: new IamAuthenticator({ apikey: process.env.WATSON_API_KEY }),
  version: process.env.WATSON_VERSION
});

export default discoveryClient;