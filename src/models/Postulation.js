const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('postulation', {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      vacantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  };