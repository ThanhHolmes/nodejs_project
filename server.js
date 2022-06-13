require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const classRoutes = require('./routes/class.route');
const studentRoutes = require('./routes/student.route');

//Set EJS View
app.set('view engine', 'ejs');
app.set('views', './views');

//Set req.body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

//Route Init
app.use('/', classRoutes);

app.use('/', studentRoutes);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
