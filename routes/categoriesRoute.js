const express = require('express');
const router = express.Router();

const Categories = require('../models/categories');



router.get('/', function (req, res, next) {
  return Categories.findAll()
  .then(function(cats){
    res.send(cats);
  })
  .catch(next);
});



module.exports = router;
