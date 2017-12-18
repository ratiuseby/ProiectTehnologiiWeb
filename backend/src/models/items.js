'use strict';
module.exports = (sequelize, DataTypes) => {
  var items = sequelize.define('items', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return items;
};