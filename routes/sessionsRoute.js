const express = require('express');
const router = express.Router();

const Student = require('../models/students');


router.post('/', function (req, res, next) {
  console.log('THIS IS REQUEST', req.body);
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


module.exports = router;
