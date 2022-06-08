require('dotenv').config();
const connectDB = require('../utils/connectdb');
const studentController = {};

studentController.showClasses= (req, res) => {
    const sql = 'SELECT * FROM classes';
    try {
        connectDB.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.render('pages/classes', {
            data: results
        })
        })
    } catch (error) {
        res.status(500).send(error)
    }
}; 

studentController.editClass = (req, res) => {
    const {id} = req.params;
    try {
        connectDB.query('SELECT * FROM classes WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            res.render('pages/class_edit', {
                data: results[0]
            })
        }) 
    } catch (error) {
        res.status(500).send(error)
    }
};

studentController.updateClass = (req, res) => {
    const {id} = req.params;
    const newClass = req.body;
    try {
        connectDB.query('UPDATE classes SET ? WHERE id = ?', [newClass, id], (err) => {
            if (err) throw err;
            res.redirect('/')
        })
    } catch (error) {
        res.status(500).send(error)
    }
};

studentController.deleteClass = (res, req) => {
    const {id} = req.params;
    try {
        connectDB.query('DELETE FROM students WHERE id = {classes.id}', (err) => {
            if (err) throw err;
            connectDB.query('DELETE FROM classes WHERE id = ?', [id], (err) => {
            if (err) throw err;
            res.redirect('/');
        })
        });

    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = studentController;