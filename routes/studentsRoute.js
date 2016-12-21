const express = require('express');
const router = express.Router();

const Students = require('../models/students');


router.get('/', function (req, res, next) {

});

router.post('/', function(req, res, next){
  return Students.create(req.body)
  .catch(next);
})

module.exports = router;
