require('dotenv').config();
const connectDB = require('../utils/connectdb');
const studentController = {};

studentController.addData = (req, res) => {
  const data = req.body;
  try {
    connectDB.query('INSERT INTO students SET ?', [data], (err) => {
      if (err) throw err;
      res.redirect(`/classes/${data.class_id}/students`);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = studentController;
