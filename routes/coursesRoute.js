const express = require('express');
const router = express.Router();

const Courses = require('../models/courses');
router.get('/', function (req, res, next) {
  return Courses.findAll()
  .then(function(courses){
    res.send(courses);
  })
  .catch(next);
});


module.exports = router;
