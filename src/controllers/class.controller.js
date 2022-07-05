require('dotenv').config();
import db from '../config/connectdb';


const listClass = async (req, res) => {
    try {
        db.query('SELECT * FROM classes', (err, results) => {
            if (err) throw err;
            return res.status(200).json({ results });
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

export {
    listClass,
}