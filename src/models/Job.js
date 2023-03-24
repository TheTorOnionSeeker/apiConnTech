const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('job', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};