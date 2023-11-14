//IMPORTS
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

//variable global (db) para acceder en cualquier parte de la app, le doy el valor del pool (que es el que me permite lanzar las querys)
global.db = pool.promise();