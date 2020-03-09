/***
 * All chatbot services
 * 
 * @created at 3:16 AM 07/03/2020 (DD/MM/YYYY)
 * @author Arpan
 */

import discoveryClient from "../../config/discovery.client.config";

class ChatServices {
    
    /***
     * Method for greeting and initializing conversation with user
     * 
     */
    static greetWelcome() {
        return {
            "greetings": "Hi folk! I'm the guy who never gets offended, hence fell free to ask."
        };
    }
}

export default ChatServices;