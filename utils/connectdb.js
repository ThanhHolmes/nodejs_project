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

// let sql = 'SELECT * FROM users';
// connect_db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result[0]);
// });

module.exports = connect_db;
