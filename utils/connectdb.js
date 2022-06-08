require('dotenv').config();
const mysql = require('mysql');
const connectDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connectDB.connect((err) => {
  if (err) {
    console.log('Connection to database failed');
    throw err;
  }
  console.log('MySQL is Connected!');
});

module.exports = connectDB;
