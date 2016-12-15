let Sequelize = require('sequelize');
let db = require('./_db');


let Prompts = db.define('prompts',{
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},{});



module.exports = Prompts;
