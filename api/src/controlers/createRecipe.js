const express = require ('express');
const { Recipe } = require ('./../db');


const createRecipe = async (recipe) => {
           const {nombre, image, resumen, nivel_Saludable, pasos, diets} = recipe
        if (!nombre || !image || !resumen || !nivel_Saludable || !pasos || !diets) throw Error ("Falta información para crear receta")
        const newRecipe = await Recipe.create({
            nombre,
            image,
            resumen,
            nivel_Saludable,
            pasos,
            diets
        })
        newRecipe.addDiet(diets)
        return newRecipe
   
};



module.exports = createRecipe