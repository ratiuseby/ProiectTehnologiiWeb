'use strict';
module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
    id: DataTypes.INTEGER,
    idItem: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return orders;
};