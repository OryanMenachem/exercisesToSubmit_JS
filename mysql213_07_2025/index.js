import express from 'express';
import router from './router.js';
import 'dotenv/config';



const PORT = 7000;
const server = express();


server.use('/', router)


 server.listen(PORT, () => {

            console.log(`Server is running on port ${PORT}`);
            console.log(`Visit http://localhost:${PORT} to see the app`)
        })






export default server;
 


