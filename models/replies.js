let Sequelize = require('sequelize');
let db = require('./_db');


let Replies = db.define('replies',{
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  feedback: {
    type: Sequelize.TEXT,
  }
},{});



module.exports = Replies;
