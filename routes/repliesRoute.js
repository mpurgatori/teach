const express = require('express');
const router = express.Router();

const Reply = require('../models/replies');
const Prompt = require('../models/prompts');
const Student = require('../models/students')
const Teacher = require('../models/teachers')
const Course = require('../models/courses')


router.get('/', function(req,res,next) {
  return Reply.findAll({
    where: {
      studentId: req.session.studentId
    },
    include: [{
      model: Prompt
    }]
  })
  .then(replies => res.send(replies))
  .catch(next)
});

router.get('/teacher', function (req, res, next) {
  console.log('SESSION FOR REPLY',req.session);
    return Reply.findAll({
      include:[{
        model: Prompt,
        include:[{
          model: Course,
          where: {
            teacherId: req.session.teacherId
          }
        }]
      }]
      })
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

router.put('/', function(req,res,next){
  return Reply.update(
    { feedback: req.body.feedback },
           { where:
             { id: req.body.id }})
      .catch(next)
})


module.exports = router;
