//fichero que crea la app de express para controlar las rutas

//IMPORTS
const express = require('express');
const fs = require('node:fs/promises');//Import de File System
const dayjs = require('dayjs');
const cors = require('cors');

const app =express();

app.use(cors());
app.use(express.json()); //Dar la posibilidad de enviar en el body de la petición obejetos de tipo JSON

//  MIDDLEWARE
// podemos hacer autenticaciones, moderador o no, permisos o no.. X perfil
app.use((req, res, next ) => {
    console.log(new Date());
    next();
})

//registrar en un fichero de texto la petición entrante
app.use(async (req, res, next) => {
    const linea = `[${dayjs().format('DD-MM-YY HH:mm:ss')}] Método: ${req.method}. Url: ${req.url}\n`;

    await fs.appendFile('./main.log', linea);

    next();
});

//RUTAS
app.use('/api', require('./routes/api'));

module.exports=app;
