require('dotenv').config();
const { URL, API_KEY } = process.env;
const { Recipe, Diet } = require ('../db')
const axios = require ('axios');


const recipeFromApi = async (ido) => {
 try{
   
    const response = await axios.get(`${URL}${ido}/information?apiKey=${API_KEY}`)
    const { id , title, summary , image ,diets , healthScore , analyzedInstructions} = response.data
        const recipeApi = {
        id,
        nombre: title,
        image,
        nivel_saludable: healthScore,
        resumen: summary.replace(/<[^>]*>?/g, ""),
        pasos: analyzedInstructions[0]?.steps.map((r) => {
        return r.step}).join(""),
        diets: diets,
    }
   
    return recipeApi
} catch (error) { return('id de receta no encontrada')}
}

const recipeFromBDD = async  (ido) => {

    const recipesBdd =  await Recipe.findByPk(ido,{
        include: {
            model: Diet, 
            attributes: ['nombre'],
            through: {
                attributes: [],
            },
        }
    })
  
   return recipesBdd
}

//funcion que une la info de la api y la BDD
const getRecipe = async (id) => {
   
   const recipeBdd =  await recipeFromBDD(id)
   if(recipeBdd) return recipeBdd
   const recipeApi =  recipeFromApi(id)
   if(recipeApi) return recipeApi
   return 'no hay nada que devolver'
}

module.exports = getRecipe