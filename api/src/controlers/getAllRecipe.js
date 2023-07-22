require('dotenv').config();
const { URL, API_KEY } = process.env;
const axios = require ('axios');
const { Recipe, Diet } = require ('../db')
const { Op } = require("sequelize");


//funcion que obtiene info de la api
const getAllRecipesApi = async() => {
    const response = await axios.get('https://run.mocky.io/v3/7c9cdb34-3bbb-4eb6-a786-6be7c8100ddd')
    //`${URL}complexSearch${API_KEY}&addRecipeInformation=true&number=2` (resultados mockeados)
    const respuesta =  response.data
   
    const getAllRecipes = respuesta.results.map( elem => {
        return {
            id: elem.id,
            nombre: elem.title,
            image: elem.image,
            nivel_saludable: elem.healthScore,
            resumen: elem.summary.replace(/<[^>]*>?/g, ""),
            pasos: elem.analyzedInstructions[0]?.steps.map((r) => {
                return r.step}).join("")
            ,
            diets: elem.diets.length
                ? elem.diets.map((d) => d).join(", ")
                : elem.diets
        }
        
    })
    
    return getAllRecipes
}

//funcion que obtiene la info de la BDD
const getAllRecipesFromBDD = async  () => {

    const recipesBdd =  await Recipe.findAll({
        include: {
            model: Diet, 
            attributes: ["nombre"], 
            through: {
                attributes: []
            },
        }
    })
   console.log(recipesBdd)
   return recipesBdd
}


const dataFromBD =async () => {
    const data = await getAllRecipesFromBDD()
    const newArray = data.map((elem) => ({
        id: elem.id,
        nombre: elem.nombre,
        image: elem.image,
        nivel_saludable: elem.nivel_Saludable,
        resumen: elem.resumen,
        pasos: elem.pasos,
        diets: elem.diets.length
        ? elem.diets.map((d) => d.nombre).join(", ")
        : elem.diets
    }))
   
    return newArray
}


// funcion que une la info de la api y la BDD
const recipes = async () => { 
  
   const recipeApi =  await getAllRecipesApi()
   const recipeBdd =  await dataFromBD()
  
   const getAllRecipes  = [...recipeApi,...recipeBdd]
   return getAllRecipes
  //console.log(recipeApi)
  //console.log(getAllRecipes)

}    



module.exports = recipes