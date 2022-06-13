require('dotenv').config();
const connectDB = require('../utils/connectdb');
const studentController = {};

// Add New Student
// studentController.addData = (req, res) => {
//   const data = req.body;
//   const {class_id} = req.params;
//   console.log(class_id);
//   console.log(req.body);
//   try {
//     connectDB.query('SELECT * FROM classes ')
//     connectDB.query('INSERT INTO students SET ? WHERE class_id = ?', [data, class_id], (err, results) => {
//       if (err) throw err;
//       console.log(results);
//       res.redirect(`/classes/${data.class_id}/students`);
//     });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// studentController.chooseData = (req, res) => {
//   connectDB.query('SELECT class_id FROM students', (err, results) => {
//     if (err) throw err;
//     res.render('pages/student_list', {
//       data: results
//     });
//   })
// }

studentController.addData = (req, res) => {
  const data= req.body;
  // const { id } = req.params;
  console.log(data);
  try {
     connectDB.query('INSERT INTO students SET ? ', [data], (err) => {
      if (err) throw err;
      // connectDB.query('SELECT s.class_id FROM students AS s INNER JOIN classes ON s.class_id = classes.id', (err, results) => {
      // if (err) throw err;
      // console.log(results);
      res.redirect(`/classes/${data.class_id}/students`)
    })
  
  } catch (error) {
    res.status(500).send(error);
  }
};

// studentController.chooseData = (req, res) => {
//   const { id } = req.params;
//   console.log(id);//abc
//   try {
//     connectDB.query(
//       'SELECT * FROM students WHERE class_id = ?',
//       [id],
//       (err, results) => {
//         if (err) throw err;
//         res.render('pages/student_list', {
//           data: results[0],
//         });
//       },
//     );
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// studentController.addData = (req, res) => {
//   const { id } = req.params;
//   const newData = req.body;
//   console.log(req.body);
//   try {
//     connectDB.query(
//       'INSERT INTO students SET ?',
//       [newData, id],
//       (err) => {
//         if (err) throw err;
//         res.redirect(`/classes/${data.class_id}/students`);
//       },
//     );
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
    



module.exports = studentController;
