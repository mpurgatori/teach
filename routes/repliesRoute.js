const express = require('express');
const router = express.Router();

const Reply = require('../models/replies');


router.get('/', function (req, res, next) {
  return Reply.findAll()
  .then(replies => res.send(replies))
  .catch(next)
});


router.post('/', function(req, res, next){
  return Reply.create({
    content: req.body.replyContent,
    promptId: req.body.promptId,
    studentId: req.session.studentId
  })
  .then( reply => res.send(reply))
  .catch(next);
})


module.exports = router;
