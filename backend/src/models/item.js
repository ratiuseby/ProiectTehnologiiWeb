'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return item;
};