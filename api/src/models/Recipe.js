const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
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