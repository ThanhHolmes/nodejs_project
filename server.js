require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const PORT = 3000;
const classRoutes = require('./routes/class.route');
const studentRoutes = require('./routes/student.route');
const authRoutes = require('./routes/auth.route');
const homeRoutes = require('./routes/home.route');

//Set EJS View
app.set('view engine', 'ejs');
app.set('views', './views');

//Express body parser
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

//Express session
app.use(
    session({
        secret: 'secret',
        resave: false,
        cookie: { secure: true },
        saveUninitialized: true,
    }),
);

//Express Cookie Parser
app.use(cookieParser());

//Connect flash
app.use(flash());

//Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//ROUTE INIT

//Class Route
app.use('/', classRoutes);

//Student Route
app.use('/', studentRoutes);

//Home Page Route
app.use('/', homeRoutes);

//Auth Route
app.use('/', authRoutes);


app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});
