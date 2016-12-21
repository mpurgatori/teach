let Sequelize = require('sequelize');
let db = require('./_db');


let Category = db.define('category',{
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{});



module.exports = Category;
