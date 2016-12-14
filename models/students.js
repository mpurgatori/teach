let Sequelize = require('sequelize');
let db = require('./_db');


let Students = db.define('students', {
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

module.exports = Students;
