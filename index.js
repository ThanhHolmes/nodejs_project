require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const usersRoutes = require('./routes/users.route');
const connect_db = require('./utils/users_db');

app.use(morgan('combined'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

connect_db.connect((err) => {
    if (err) {
        console.log("Connection to database failed");
        throw err;
    }
    console.log("MySQL Connected!")});

// connect_db.query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// Route init
app.use('/users', usersRoutes);
app.listen(process.env.PORT, () => console.log('App listening at port',process.env.PORT));
