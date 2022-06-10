require('dotenv').config();
const connectDB = require('../utils/connectdb');
const studentController = {};

// Add New Student
studentController.addData = (req, res) => {
  const data = req.body;
  try {
    connectDB.query('INSERT INTO students SET ?', [data], (err, results) => {
      if (err) throw err;
      console.log(results);
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = studentController;
