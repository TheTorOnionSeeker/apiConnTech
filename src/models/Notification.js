const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('notification', {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  };