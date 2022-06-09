require('dotenv').config();
const connectDB = require('../utils/connectdb');
const classController = {};
const studentController = {};

// Show Class List
classController.showClass = (req, res) => {
  const sql = 'SELECT * FROM classes';
  try {
    connectDB.query(sql, (err, results) => {
      if (err) throw err;
      res.render('pages/classes', {
        data: results,
      });
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
        res.redirect('/');
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
    connectDB.query('DELETE FROM students WHERE class_id = ?', [id], (err) => {
      if (err) throw err;
      connectDB.query('DELETE FROM classes WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Show List Student
classController.showStudentList = (req, res) => {
  const { id } = req.params;
  const sql =
    'SELECT s.class_id, s.fullname, s.age, s.gender FROM students AS s INNER JOIN classes ON s.class_id = classes.id WHERE classes.id = ?';
  try {
    connectDB.query(sql, [id], (err, results) => {
      if (err) throw err;
      res.render('pages/student_list.ejs', {
        data: results,
      });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = classController;
