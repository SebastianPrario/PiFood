const express = require ('express');
require('dotenv').config();
const { URL, API_KEY } = process.env;
const { Recipe, Diet } = require ('./../db')
const axios = require ('axios');


const recipeFromApi = async (ido) => {
 try{
    const response = await axios.get(`${URL}${ido}/information${API_KEY}`)
    const { id , title, summary , image ,diets , healthScore , analyzedInstructions} = response.data
    const recipeApi = {
        id,
        nombre: title,
        image,
        nivel_saludable: healthScore,
        resumen: summary.replace(/<[^>]*>?/g, ""),
        pasos: analyzedInstructions[0]?.steps.map((r) => {
        return r.step}).join(""),
        diets: diets.length ? diets.map((d) => d).join(", "): diets,
    }
   
    return recipeApi
} catch (error) { return('no hay receta con ese ID')}
}
    

const recipeFromBDD = async  (ido) => {

    const recipesBdd =  await Recipe.findByPk(ido ,{
        include: {
             model: Diet, 
             attributes: ["nombre"], 
             through: {
               attributes: []
              }
        }
    })
    
  
   return recipesBdd
}

//funcion que une la info de la api y la BDD
const getRecipe = async (ido) => {

   const recipeBdd =  await recipeFromBDD(ido)
   if(recipeBdd) return recipeBdd
   const recipeApi =  recipeFromApi(ido)
   if(recipeApi) return recipeApi
   
}





module.exports = getRecipe

// falta hacer la busqueda en la base de datos sino encuentra en la appi
