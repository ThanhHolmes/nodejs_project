require('dotenv').config();
const { json } = require('express');
const connectDB = require('../utils/connectdb');
const classController = {};

// Show Class List
classController.showClass = (req, res) => {
    console.log('classController.showClass');
    try {
        connectDB.query('SELECT * FROM classes', (err, classData) => {
            if (err) throw err;
            console.log('a', classData);
            connectDB.query(
                'SELECT class_id, COUNT(id) AS numberofstudents FROM students GROUP BY class_id',
                (err, countStudents) => {
                    if (err) throw err;
                    console.log('b', countStudents);
                    const results = [];
                    for (let item of classData) {
                        const countStudent = countStudents.find(
                            (i) => (i.class_id = item.id),
                        );
                        item.count = countStudent.numberofstudents;
                        results.push({
                            ...item,
                            count: countStudent.numberofstudents,
                        });
                    }
                    console.log(results);
                    res.render('pages/classes', {
                        data: results,
                    });
                },
            );
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Edit Class
classController.editClass = (req, res) => {
    const { id } = req.params;
    try {
        connectDB.query(
            'SELECT * FROM classes WHERE id = ?',
            [id],
            (err, results) => {
                if (err) throw err;
                res.render('pages/class_edit', {
                    data: results[0],
                });
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

classController.updateClass = (req, res) => {
    const { id } = req.params;
    const newClass = req.body;
    try {
        connectDB.query(
            'UPDATE classes SET ? WHERE id = ?',
            [newClass, id],
            (err) => {
                if (err) throw err;
                res.redirect('/classes');
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

// Delete Class
classController.deleteClass = (req, res) => {
    const { id } = req.params;
    try {
        connectDB.query(
            'DELETE FROM students WHERE class_id = ?',
            [id],
            (err) => {
                if (err) throw err;
                connectDB.query(
                    'DELETE FROM classes WHERE id = ?',
                    [id],
                    (err) => {
                        if (err) throw err;
                        res.redirect('/classes');
                    },
                );
            },
        );
    } catch (error) {
        res.status(500).send(error);
    }
};

// Show List Student
classController.showStudentList = (req, res) => {
    const { id } = req.params;
    // const sql2 = 'SELECT COUNT(*) FROM students WHERE class_id = ?';
    const sql =
        'SELECT s.class_id, s.fullname, s.age, s.gender FROM students AS s INNER JOIN classes ON s.class_id = classes.id WHERE classes.id = ?';
    try {
        connectDB.query(sql, [id], (err, results) => {
            if (err) throw err;
            res.render('pages/student_list', {
                data: results,
                class_id: id,
            });
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = classController;
