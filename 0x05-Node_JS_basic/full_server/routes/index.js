import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => AppController.getHomePage(req, res));
router.get('/students', async (req, res) => StudentsController.getAllStudents(req, res));
router.get('/students/:major', async (req, res) => StudentsController.getAllStudentsByMajor(req, res));

export default router;
