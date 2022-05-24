const express = require("express");
const app = express();
const morgan = require("morgan");
const usersRoutes = require("./routes/users.route");

const port = 3000;

app.use(morgan('combined'));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Route init
app.use("/users", usersRoutes);

app.listen(port, () => console.log(`App listening at port ${port}`));