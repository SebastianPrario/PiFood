const express = require('express')
const router = express.Router()
const getRecipe = require ('../controlers/getRecipe')
const getRecipeByName = require ('../controlers/getRecipeByName.js');
const createRecipe = require('../controlers/createRecipe');
const deleteRecipe = require('../controlers/deleteRecipe');
const getAllRecipes = require ('../controlers/getAllRecipe')


// ruta para buscar por id pasado por params 

router.get("/:id", async (req,res) => {
    try {
       
        const id = req.params.id 
        const recipe = await getRecipe(id)
        res.status(200).json(recipe)
    } catch (error) {res.status(400).json({error: error.message})}
      
});
// ruta para buscar que puede tener o no query. busca nombre por query

router.get("/" , async (req,res) => {
    try {
        const name = req.query.name
        if (name) {
            const nombre = name.toLowerCase()
            const recipes = await getRecipeByName(nombre)
            res.status(200).json(recipes)
        } else {
            const recipes = await getAllRecipes()
            res.status(200).json(recipes)
        }
    } catch (error) {res.status(400).json({error: error.message})}
      
})

// ruta para crear una receta en la BDD. la info se recibe por body
router.post("/" , async (req,res) => {
    try {
        const recipe = req.body
        const newRecipe = await createRecipe(recipe)
        res.status(201).json(newRecipe)
    } catch (error) {res.status(400).json({error: error.message})}
      
})

// ruta para borrar una receta de la Bdd. Retorna mensaje receta borrada
router.delete("/:id" , async (req,res) => {
    try {
        const {id} = req.params
        const delRecipe = await deleteRecipe(id)
        res.status(201).send('Receta Borrada')
    } catch (error) {res.status(400).json({error: error.message})}
      
})

module.exports = router