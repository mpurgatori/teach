let Sequelize = require('sequelize');
let db = require('./_db');


let Categories = db.define('categories',{
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{});



module.exports = Categories;
