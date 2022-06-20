require('dotenv').config();
const connectDB = require('../utils/connectdb');
const studentController = {};

// Add new student
studentController.addData = (req, res) => {
    const data = req.body;
    try {
        connectDB.query('INSERT INTO students SET ?', [data], (err) => {
            if (err) throw err;
        });
        res.redirect(`/classes/${data.class_id}/students`);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Edit student
studentController.editStudent = (req, res) => {
    const { id } = req.params;
    try {
        connectDB.query(
            'SELECT * FROM students WHERE id = ?',
            [id],
            (err, results) => {
                if (err) throw err;
                res.render('pages/student_update', {
                    dataRow: results[0],
                });
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

//Update student
studentController.updateStudent = (req, res) => {
    const { id } = req.params;
    const newStudent = req.body;
    // console.log(req.body.class_id);
    try {
        connectDB.query(
            'UPDATE students SET ? WHERE id = ?',
            [newStudent, id],
            (err) => {
                if (err) throw err;
                res.redirect(`/classes/${req.body.class_id}/students`);
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

studentController.deleteStudent = (req, res) => {
    const { id } = req.params;
    try {
        connectDB.query(
            'SELECT class_id FROM students WHERE id = ?',
            [id],
            (err, results) => {
                if (err) throw err;
                connectDB.query(
                    'DELETE FROM students WHERE id = ?',
                    [id],
                    (err, results) => {
                        if (err) throw err;
                    },
                );
                res.redirect(`/classes/${results[0].class_id}/students`);
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = studentController;
