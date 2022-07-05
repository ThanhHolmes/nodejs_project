//CLASS ROUTES
import express from 'express';
const router = express.Router();
import {listClass} from '../controllers/class.controller';
//SHOW CLASS
router.route('/classes')
    .get(listClass)


export default router;