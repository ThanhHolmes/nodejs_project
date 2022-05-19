const express = require("express");
const app = express();

const port = 3000;

let  users = [
    { id: 1, name: "Thành"},
    { id: 2, name: "Hoàng"}
]

app.set("view engine", "ejs");
app.set("views", "./views");
    
app.get("/users", (req, res) => {
    res.render("pages/users", {
        users: users
    });
});
app.listen(port, () => console.log(`App listening at port ${port}`));