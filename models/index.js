let db = require('./_db');

let Students = require('./students');
let Teachers = require('./teachers');
let Prompts = require('./prompts');
let Replies = require('./replies');
let Categories = require('./categories');
let Courses = require('./courses');


Replies.belongsTo(Prompts);
Replies.belongsTo(Students);

Teachers.hasMany(Prompts);
Teahcers.hasMany(Students);
Teachers.hasMany(Courses);

Students.hasMany(Courses);
Students.hasMany(Replies);


Prompts.hasMany(Replies);
Prompts.belongsTo(Categories);

module.exports = db;
