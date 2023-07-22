const express = require ('express');
const { Recipe } = require ('./../db');


const updateRecipe = async (recipe) => {
           const { resumen, nivel_Saludable, pasos, diets} = recipe
            const newRecipe = await Recipe.create({
            nombre,
            image,
            resumen,
            nivel_Saludable,
            pasos,
        })
        
       newRecipe.addDiets(diets) // este metodo lo crea automaticamente sequalize para relacionar los modelos

        return newRecipe
   
};



module.exports = createRecipe