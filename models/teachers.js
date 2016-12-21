let Sequelize = require('sequelize');
let db = require('./_db');


let Teacher = db.define('teacher', {
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
  },
  password: Sequelize.STRING,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
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

module.exports = Teacher;
