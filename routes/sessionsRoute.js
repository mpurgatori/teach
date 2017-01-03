const express = require('express');
const router = express.Router();

const Teacher = require('../models/teachers');
const Student = require('../models/students');


router.post('/', function (req, res, next) {
  return Student.findOne({ where: {
    email: req.body.email,
    password: req.body.password
  }})
  .then(student => {
    if(!student) {
      var err = new Error('Unathorized');
      err.status = 401;
      throw err;
    }
    req.session.studentId = student.id;
    res.json(student);
  })
  .catch(next)
});


router.post('/teach', function (req, res, next) {
  return Teacher.findOne({ where: {
    email: req.body.email,
    password: req.body.password
  }})
  .then(teacher => {
    if(!teacher) {
      var err = new Error('Unathorized');
      err.status = 401;
      throw err;
    }
    req.session.teacherId = teacher.id;
    res.json(teacher);
  })
  .catch(next)
});

router.get('/logout', function(req,res,next){
  req.session.destroy()
  res.send('Destroyed');
})

router.get('/', function(req,res,next){
  const sessionData = { role:null };
  if (req.session.studentId) sessionData.role = 'student';
  if (req.session.teacherId) sessionData.role = 'teacher';
  res.send(sessionData);
})

module.exports = router;
