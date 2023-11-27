const http = require('node:http');
const app = require('./src/app');
require('dotenv').config();

// Config. DB
require('./src/config/db');

// Creo el servidor
const server = http.createServer(app);

// Lo pongo a escuchar
const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Establezco la respuesta del servidor
server.on('listening', () =>
  console.log(`Servidor escuchando en el puerto ${PORT}`)
);

server.on('error', (error) => console.log(error));
