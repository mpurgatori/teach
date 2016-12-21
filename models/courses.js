let Sequelize = require('sequelize');
let db = require('./_db');


let Course = db.define('course',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{});



module.exports = Course;
