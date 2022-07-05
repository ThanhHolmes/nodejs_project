import express from 'express';
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
import classRoute from './routes/class.route'

//SET EJS VIEW
app.set('views', './views');
app.set('view engine', 'ejs');

//SET BODY PARSER
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

//ROUTES INIT

//Class Route
app.use('/', classRoute);

app.get('/', (req, res) => {
    res.send('abc');
});


app.listen(PORT, () => {
    console.log(`App is running at ${PORT}!`);
});
