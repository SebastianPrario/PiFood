const express = require ('express');
require('dotenv').config();
const { URL, API_KEY } = process.env;
const { Recipe, Diet } = require ('../db')
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
        diets: diets,
    }
   
    return recipeApi
} catch (error) { return('no hay receta con ese ID')}
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
   console.log('aca',recipeBdd)
   if(recipeBdd) return recipeBdd
   console.log('ahora')
   const recipeApi =  recipeFromApi(id)
   console.log(recipeApi,'aca2')
   if(recipeApi) return recipeApi
   
   return 'no hay nada que devolver'
   
}





module.exports = getRecipe

// falta hacer la busqueda en la base de datos sino encuentra en la appi
