const connect_db = require('../utils/connectdb');
require('dotenv').config();
const usersController = {};

usersController.showData = (req, res) => {
    const sql = 'SELECT * FROM user_list';
    connect_db.query(sql, (err, userlist) => {
        if (err) throw err;
        res.render('pages/users', {
            data: userlist,
        });
    });
};

usersController.searchData = (req, res) => {
    const { name } = req.query;
    connect_db.query(
        "SELECT * FROM user_list WHERE FullName LIKE '%" + name + "%'",
        [name],
        (err, results) => {
            if (err) throw err;
            console.log(results);
            res.render('pages/users', {
                data: results,
            });
        }
    );
};

usersController.addData = (req, res) => {
    const data = req.body;
    connect_db.query('INSERT INTO user_list SET ?', [data], (err, results) => {
        if (err) throw err;
        console.log(results);
        res.redirect('/');
    });
};

usersController.editData = (req, res) => {
    const { id } = req.params;
    connect_db.query(
        'SELECT * FROM user_list WHERE UserID = ?',
        [id],
        (err, results) => {
            if (err) throw err;
            res.render('pages/users_edit', {
                data: results[0],
            });
        }
    );
};

usersController.updateData = (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    connect_db.query(
        'UPDATE user_list SET ? WHERE UserID = ?',
        [newUser, id],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
};

usersController.deleteData = (req, res) => {
    const { id } = req.params;
    connect_db.query(
        'DELETE FROM user_list WHERE UserID = ?',
        [id],
        (err) => {
            if (err) throw err;
            res.redirect('/');
        }
    );
};

module.exports = usersController;
