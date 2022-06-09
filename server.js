require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const class_studentRoutes = require('./routes/class_student.route');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/', class_studentRoutes); // Route init

app.listen(PORT, () => {
  console.log('App listening at port', PORT);
});
