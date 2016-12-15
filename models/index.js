let db = require('./_db');

let Students = require('./students');
let Teachers = require('./teachers');
let Prompts = require('./prompts');
let Replies = require('./replies');
let Categories = require('./categories');
let Courses = require('./courses');


//***********One to One
Replies.belongsTo(Prompts); //A reply gets one prompt
Replies.belongsTo(Students); //A reply is from one Student
Prompts.belongsTo(Categories); //A Prompt falls under one category

//***********One to Many
Students.hasMany(Replies); //A Student writes many replies
Teachers.hasMany(Prompts); //A Teacher writes many prompts
Prompts.hasMany(Replies); //A prompt will have many replies



//***********Many to many

//Lots of students can be in lots of courses
//Lots of courses contains lots of students
Students.belongsToMany(Courses, {through: 'StudentCourses'});
Courses.belongsToMany(Students, {through: 'StudentCourses'});

//Lots of Teachers can teach lots of students
//Lots of Students are taught by lots of teachers
Teachers.belongsToMany(Students, {through: 'TeacherStudents'});
Students.belongsToMany(Teachers, {through: 'TeacherStudents'});

//Lots of teachers can teach lots of courses 
//Lots of courses are taught by lots of teachers
Teachers.belongsToMany(Courses, {through: 'TeacherCourses'});
Courses.belongsToMany(Teachers, {through: 'TeacherCourses'});




module.exports = db;
