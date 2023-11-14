

//fichero que levanta el servidor

const http =require ('http'); //libreria que nos permite crear el servidor

// recupera laapp de express que permite gestionar las rutas
const app = require('./src/app');

//Leemos el fichero de entorno
require('dotenv').config();

//Config Base de datos
require('./src/config/db');

//Levantamos el servidor, la app de express se encarga de gestionar esas peticiones (app)
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', (error) => console.log(error));
