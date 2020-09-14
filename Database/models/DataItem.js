module.exports = (sequelize, DataTypes) => {
    const DataItem = sequelize.define("DATAITEM", {
      type: {
        type: String
      },
      value: {
        type: String
      },
      title: {
        type: String
      },
      unit: {
        type: String
      },
      userId: {
        type: String
      },
      createdAt:{
          type: Date
      },
      updatedAt:{
        type: Date
      },
      pin:{
        type: Number
      }
    }, {     
      freezeTableName: true,
    });
    return DataItem;
  };