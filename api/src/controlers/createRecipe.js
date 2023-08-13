const { Recipe } = require ('../db');


const createRecipe = async (recipe) => {
    const {nombre, image, resumen, nivel_saludable, pasos, diets} = recipe 
    console.log(diets) 
    if (!nombre || !resumen || !nivel_saludable || !pasos || !diets) throw Error ("Falta información para crear receta")
    const newRecipe = await Recipe.create({
            nombre,
            image,
            resumen,
            nivel_saludable,
            pasos,
    })
       
    newRecipe.addDiets(diets) // este metodo lo crea automaticamente sequalize para relacionar los modelos

    return newRecipe
   
};

module.exports = createRecipe