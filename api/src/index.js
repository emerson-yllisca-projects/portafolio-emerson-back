require('dotenv').config(); //variables de entorno
// Server 
const app = require('../config/server');
const port = process.env.APP_PORT;
const logger = require('../config/logger')

app.listen( port ,  (  () => {
    logger.info(`Servidor  corriendo en puerto: ${port} `)    
}))

