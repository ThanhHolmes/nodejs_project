const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

let  users = [
    { id: 1, name: "Thanh"},
    { id: 2, name: "Hoang"}
];
    
    
app.get("/users", (req, res) => {
    res.render("pages/users", {
        users: users
    });
});

app.get("/users/search", (req, res) => {
    let q = req.query.q;
    let matchedUsers = users.filter((user) => {
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render("pages/users", {
        users: matchedUsers
    });
});
app.listen(port, () => console.log(`App listening at port ${port}`));