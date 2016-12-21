let Sequelize = require('sequelize');
let db = require('./_db');


let Reply = db.define('reply',{
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  feedback: {
    type: Sequelize.TEXT,
  }
},{});



module.exports = Reply;
