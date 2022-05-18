const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const user = {
    firstName: "Nguyen",
    lastName: "Thanh",
};
app.get("/", (req, res) => {
    res.render("pages/index.ejs", {
        user: user,
    });
});
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
});