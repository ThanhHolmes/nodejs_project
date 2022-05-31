const connect_db = require('../utils/connectdb');
require('dotenv').config();
const usersController = {};

// // class UsersController {
// //     index(req, res) {
// //         let sql = 'SELECT * FROM users';
// //         connect_db.query(sql, (err, result) => {
// //             if (err) throw err;
// //             console.log(sql, result);
// //             res.send('/',result);
// //         });
// //     }
//     //  (err) throw err;
//     // console.log(result);
//     // res.render('pages/users', {
//     //         users: users,
//     //     })
//     // })if

//     // Using Query Parameters
    // search(req, res) {
    //     let q = req.query.q;
    //     let matchedUsers = users.filter((user) => {
    //         return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    //     });
    //     res.render('pages/users', {
    //         users: matchedUsers,
    //     });
    // }

//     // Using POST methods
//     getCreate(req, res) {
//         res.render('pages/create');
//     }

//     postCreate(req, res) {
//         users.push(req.body);
//         res.redirect('/users');
//     }
// }
usersController.showData = (req, res) => {
    let sql = 'SELECT * FROM user_list';
    connect_db.connect((err, conn) => {
        connect_db.query(sql, (err, user) => {
            if (err) throw err;
            res.render('pages/users', {
                data: user,
            });
        });
    });
};

usersController.searchData = (req, res) => {
        let sql = 'SELECT * FROM user_list';
        let q = req.query.user_list;
            connect_db.query(sql, (err, user) => {
             user_list.filter((user) => {
            return data[i].FullName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
        });
    });
        res.render('pages/users', {
        data: user,
        });
    }

module.exports = usersController;
