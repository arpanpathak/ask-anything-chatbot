/***
 * This is for redirecting requests to services
 * 
 * @created at 3:22 AM 07/03/2020 (DD/MM/YYYY)
 * @author Arpan
 */
import express from 'express';
import ChatServices from "../services/chat.service";

const router = express.Router();

// Registering conversation init route
router.get('/asknyt/init', (req,res) => res.json(ChatServices.greetWelcome()) );

export default router;
