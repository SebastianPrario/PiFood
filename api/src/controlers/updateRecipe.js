const express = require ('express');
const { Recipe } = require ('./../db');


const updateRecipe = async (recipe) => {
           const {id, image, nombre, resumen, nivel_Saludable, pasos, diets} = recipe
          
           await Recipe.update({
                nombre,
                image,
                resumen,
                nivel_Saludable,
                pasos,
                diets
                }, 
                { where: {id}
            })  
};



module.exports = updateRecipe