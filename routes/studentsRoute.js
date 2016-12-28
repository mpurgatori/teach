const express = require('express');
const router = express.Router();

const Student = require('../models/students');


router.get('/', function (req, res, next) {

});

router.post('/', function(req, res, next){
  return Student.create(req.body)
  .then(student => {
    res.cookie('studentId', student.id)
    res.json(student)
  })
  .catch(next);
})

module.exports = router;
