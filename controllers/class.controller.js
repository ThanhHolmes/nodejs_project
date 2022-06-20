require('dotenv').config();
const { json } = require('express');
const connectDB = require('../utils/connectdb');
const classController = {};

// Show Class List
classController.showClass = (req, res) => {
    try {
        connectDB.query('SELECT * FROM classes', (err, classData) => {
            if (err) throw err;
            connectDB.query(
                'SELECT class_id, COUNT(id) AS numberOfStudents FROM students GROUP BY class_id',
                (err, numStudents) => {
                    if (err) throw err;
                    const results = [];
                    // classData.forEach((element, i) => {
                    //     let itemClassData = numStudents[i].numberofstudents;
                    //     let    newItemData = {
                    //         ...classData[i],
                    //         quantity: itemClassData,
                    //     };
                    //     results.push(newItemData);
                    // });
                    classData.forEach((classItem) => {
                        const numStudent = numStudents.find(
                            (item) => item.class_id === classItem.id,
                        );
                        results.push({
                            ...classItem,
                            quantity: numStudent ?.numberOfStudents || 0,   
                        });
                    });
                    // console.log(results);
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
                res.render('pages/class_update', {
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
    const sql =
        'SELECT s.class_id, s.fullname, s.age, s.gender, s.id FROM students AS s INNER JOIN classes ON s.class_id = classes.id WHERE classes.id = ?';
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
