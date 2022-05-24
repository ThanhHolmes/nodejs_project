const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3000;

app.use(morgan('combined'));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

let  users = [
    { id: 1, name: "Thanh"},
    { id: 2, name: "Hoang"},
    { id: 3, name: "Sa Lem"},
    { id: 4, name: "Chung"}
];
    
    
app.get("/users", (req, res) => {
    res.render("pages/users", {
        users: users
    });
});

// Using Query Parameters
app.get("/users/search", (req, res) => {
    let q = req.query.q;
    let matchedUsers = users.filter((user) => {
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("pages/users", {
        users: matchedUsers
    });
});

// Using POST methods
app.get("/users/create", (req, res) => {
    res.render("pages/create");
});

app.post("/users/create", (req, res) => {
    users.push(req.body);
    res.redirect("/users")
});

app.listen(port, () => console.log(`App listening at port ${port}`));