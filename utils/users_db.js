require('dotenv').config();
const mysql = require('mysql');
const connect_db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

module.exports = connect_db;  




