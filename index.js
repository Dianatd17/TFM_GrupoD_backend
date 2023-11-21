const express = require('express');

require('dotenv').config();

const appback = express();

// GET http://localhost:3000/api/users
appback.get('/api/users', (req, res) => {
  res.end('Devuelvo todos los usuarios');
});

appback.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en puerto ${process.env.DB_PORT}`);
});
