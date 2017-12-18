'use strict';
module.exports = (sequelize, DataTypes) => {
  var invoices = sequelize.define('invoices', {
    sum: DataTypes.FLOAT,
    idUser: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return invoices;
};