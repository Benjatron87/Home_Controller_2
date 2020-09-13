module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("USER", {   
    userName: {
      type: String
    },
    password: {
      type: String
    },
    firstName:{
      type: String
    },
    lastName:{
      type: String
    },
    createdAt:{
      type: Date
    },
    updatedAt:{
      type: Date
    }
  }, {     
    freezeTableName: true,
  });
  return User;
};