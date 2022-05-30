
// let users = [
//     { id: 1, name: 'Thanh' },
//     { id: 2, name: 'Hoang' },
//     { id: 3, name: 'Sa Lem' },
//     { id: 4, name: 'Chung' },
// ];

const connect_db = require("../utils/users_db");


class UsersController {
   index(req, res) {
    connect_db.query("SELECT * FROM users", function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    res.render('/', {
            usersData: data,
        })
    })
}

    // // Using Query Parameters
    // search(req, res) {
    //     let q = req.query.q;
    //     let matchedUsers = users.filter((user) => {
    //         return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    //     });
    //     res.render('pages/users', {
    //         users: matchedUsers,
    //     });
    // }

    // // Using POST methods
    // getCreate(req, res) {
    //     res.render('pages/create');
    // }

    // postCreate(req, res) {
    //     users.push(req.body);
    //     res.redirect('/users');
    // }
}

module.exports = new UsersController();
