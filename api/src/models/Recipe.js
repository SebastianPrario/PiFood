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
        return  999900000000 + Math.floor(Math.random()*100000000);
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
     
    },
    nivel_saludable: {
      type: DataTypes.FLOAT,
      
    },
    pasos: {
      type: DataTypes.TEXT,
    }
    },
    {
      timestamps: false
    }
  )
} 