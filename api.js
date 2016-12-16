const express = require('express');
const router = express.Router();

let categoryRouter = require('./routes/categoriesRoute');
let replyRouter = require('./routes/repliesRoute');
let courseRouter = require('./routes/coursesRoute');
let studentRouter = require('./routes/studentsRoute');
let teacherRouter = require('./routes/teachersRoute');
let promptRouter = require('./routes/promptsRoute');


router.use('/categories', categoryRouter);
router.use('/replies', replyRouter);
router.use('/courses', courseRouter);
router.use('/students', studentRouter);
router.use('/teachers', teacherRouter);
router.use('/prompts', promptRouter);


module.exports = router;
