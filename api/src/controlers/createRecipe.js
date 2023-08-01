const express = require ('express');
const { Recipe } = require ('../db');


const createRecipe = async (recipe) => {
    const {nombre, image, resumen, nivel_Saludable, pasos, diets} = recipe
    if (!nombre || !resumen || !nivel_Saludable || !pasos || !diets) throw Error ("Falta información para crear receta")
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