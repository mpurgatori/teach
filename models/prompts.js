let Sequelize = require('sequelize');
let db = require('./_db');


let Prompts = db.define('prompts',{
  contents: {
    type: Sequelize.TEXT,
    allowNull: false
  }
},{});



module.exports = Prompts;
