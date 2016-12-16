const express = require('express');
const router = express.Router();

const Prompts = require('../models/prompts');


router.get('/', function (req, res) {
  return Prompts.findAll()
  .then(function(prompts){
    res.send(prompts);
  })
});


module.exports = router;
