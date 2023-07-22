const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: () => {
        return 'BDD' + Math.random().toString(36).substring(2, 15);
      }
    },
   nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
    
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nivel_Saludable: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 100
      }
    },
    pasos: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    },
    {
      timestamps: false
    }
  )
} 