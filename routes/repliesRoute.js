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
        model: Prompt,
        include:[{
          model: Course
        }]
      }]
  })
  .then(replies => res.send(replies))
  .catch(next)
});

router.get('/teacher', function (req, res, next) {
  console.log('SESSION FOR REPLY',req.session);
    return Reply.findAll({
      include:[{
        model: Student
      },
      {
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
  let student;
  let prompt;
  return Promise.all([
    Student.findOne({
      where: {
        id: req.session.studentId
      }
    }),
    Prompt.findOne({
      where: {
        id: req.body.promptId
      }
    })
  ])
  .then(function(values){
    student = values[0];
    prompt = values[1]
    console.log('This is student object',student);
  })
  .then(()=> {
    return Reply.build({
      content: req.body.replyContent
    })
  })
  .then(rep => {
    rep.setStudent(student);
    rep.setPrompt(prompt);
    console.log('this is rep',rep);
    return rep.save();
  })
  .then( reply => {
    console.log('Here is REPLY', reply);
    res.send(reply)
  })
  .catch(next);
})

router.put('/', function(req,res,next){
  return Reply.update(
    { feedback: req.body.feedback },
     { where:
       { id: req.body.id }})
  .then(reply => res.send(reply))
  .catch(next)
})


module.exports = router;
