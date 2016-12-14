let Sequelize = require('sequelize');
let db = require('./_db');


let Courses = db.define('courses',{
  course: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{});



module.exports = Courses;
