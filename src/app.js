// Creo y configuro la aplicación de Express
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use('/img', express.static('uploads'));

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/api'));

module.exports = app;