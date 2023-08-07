const { Recipe } = require ('../db');


const updateRecipe = async (recipe) => {
           const {id, image, nombre, resumen, nivel_saludable, pasos, diets} = recipe
          
           await Recipe.update({
                nombre,
                image,
                resumen,
                nivel_saludable,
                pasos,
                diets
                }, 
                { where: {id}
            })  
};



module.exports = updateRecipe