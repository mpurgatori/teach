let Sequelize = require('sequelize');
let db = require('./_db');


let Teachers = db.define('teachers', {
  first: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
},
{
  getterMethods: {
    fullName: function (){
      return this.first+' '+this.last;
    }
  }
}
)

module.exports = Teachers;
