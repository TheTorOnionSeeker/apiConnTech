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
    companyName: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dateBegin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jobActually: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
};