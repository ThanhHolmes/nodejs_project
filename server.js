require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const studentRoutes = require('./routes/student.route');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use('/', studentRoutes); // Route init

app.listen(PORT, () => {
  console.log('App listening at port', PORT);
});
