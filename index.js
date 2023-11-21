const express = require('express');

const logopedasBack = express();

logopedasBack.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
 });