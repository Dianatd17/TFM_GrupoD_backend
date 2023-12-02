// Creo y configuro la aplicación de Express
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Configuraciones para servir imagenes
app.use('/api/image-user', express.static('image-user'))

app.use('/api', require('./routes/api'));

module.exports = app;