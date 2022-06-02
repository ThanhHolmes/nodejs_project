require('dotenv').config();
const mysql = require('mysql');
const connect_db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

connect_db.connect((err) => {
    if (err) {
        console.log('Connection to database failed');
        throw err;
    }
    console.log('MySQL Connected!');
});

module.exports = connect_db;
