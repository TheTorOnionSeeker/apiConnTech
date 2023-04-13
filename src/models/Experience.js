const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('experience', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateBegin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateEnd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobActually: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};