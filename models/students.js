let Sequelize = require('sequelize');
let db = require('./_db');


let Student = db.define('student', {
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
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: Sequelize.STRING,
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
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

module.exports = Student;
