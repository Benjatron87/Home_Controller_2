module.exports = (sequelize, DataTypes) => {
    const DataItems = sequelize.define("DATAITEMS", {
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
    }

    });
    return DataItems;
  };