require('dotenv').config();
const { URL, API_KEY } = process.env;
const axios = require ('axios');
const { Recipe, Diet } = require ('../db')
const { Op } = require("sequelize");


// funcion que obtiene info de la api
const getAllRecipesApi = async(name) => {
    const respuesta = (await axios.get('https://run.mocky.io/v3/7c9cdb34-3bbb-4eb6-a786-6be7c8100ddd')).data
    //rdo mokeado   
    //`${URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=2` (resultados api)
    
    if (name) {
        const array = respuesta.results.filter( elem => {      
            if(elem.title.toLowerCase().includes(name)) return true
        })
        const getAllRecipes = array.map( elem => {
            return {
                id: elem.id,
                nombre: elem.title,
                image: elem.image,
                nivel_saludable: elem.healthScore,
                resumen: elem.summary.replace(/<[^>]*>?/g, ""),
                pasos: elem.analyzedInstructions[0]?.steps.map((r) =>{return r.step}).join(""),
                diets: elem.diets
            }
        }) 
        return getAllRecipes
    } else {  
            const getAllRecipes = respuesta.results.map( elem => {
            return {
                id: elem.id,
                nombre: elem.title,
                image: elem.image,
                nivel_saludable: elem.healthScore,
                resumen: elem.summary.replace(/<[^>]*>?/g, ""),
                pasos: elem.analyzedInstructions[0]?.steps.map((r) => {return r.step}).join(""),
                diets: elem.diets
            }})
       
        return getAllRecipes
    }
}



//funcion que obtiene la info de la BDD
const getAllRecipesFromBDD = async  (name) => {
    if(name){
        const recipesBdd =  await Recipe.findAll({
        where: { 
            nombre:{
             [Op.iLike]:`%${name}%`    
        }},
        include: {
            model: Diet, 
            attributes: ["nombre"], 
            through: {
                attributes: []
            },
        }
        })
        return recipesBdd

    } else {
        const recipesBdd =  await Recipe.findAll({
            include: {
            model: Diet, 
            attributes: ["nombre"], 
                through: {
                attributes: []
                },
            }
        })
     return recipesBdd
    }
}
const dataFromBd = async (name) =>{
    const data  = await getAllRecipesFromBDD(name)
    const newArray = data.map((elem) => ({
        id: elem.id,
        nombre: elem.nombre,
        image: elem.image,
        nivel_saludable: elem.nivel_saludable,
        resumen: elem.resumen,
        pasos: elem.pasos,
        diets: elem.diets.map(ele => ele.nombre)
    }))
    return newArray
}

// funcion que une la info de la api y la BDD

const recipes = async (name) => { 
  
   const recipeApi =  await getAllRecipesApi(name)
   const recipeBdd =  await dataFromBd(name)
   const getAllRecipes  = [...recipeApi,...recipeBdd]
   const mensaje = 'no existe receta con ese nombre'
   return getAllRecipes.length>0 ? getAllRecipes : mensaje

}    

module.exports = recipes