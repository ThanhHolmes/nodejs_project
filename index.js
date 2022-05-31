require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const usersRoutes = require('./routes/users.route');

app.use(morgan('combined'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
    express.urlencoded({
        extended: true,
    })
);

// Route init
app.use('/', usersRoutes);

app.listen(process.env.PORT, () =>
    console.log('App listening at port', process.env.PORT)
);
