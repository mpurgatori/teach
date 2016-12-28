const express = require('express');
const router = express.Router();

const Prompt = require('../models/prompts');
const Course = require('../models/courses');
const Student = require('../models/students');




router.get('/', function (req, res, next) {
  console.log('!&!&!&!&!', req.session);
  return Prompt.findAll({
    include: [{
      model: Course,
      include: [{
        model: Student,
        where: {
          id: req.session.studentId
        }
      }]
    }]
  })
  .then(prompts => res.send(prompts))
  .catch(next)
});

module.exports = router;
