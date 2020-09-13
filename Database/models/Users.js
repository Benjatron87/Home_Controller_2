module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("USERS", {   
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
  });
  return Users;
};