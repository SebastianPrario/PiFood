const express = require('express')
const router = express.Router()
const getRecipeById = require ('../controlers/getRecipeById')
const createRecipe = require('../controlers/createRecipe');
const deleteRecipe = require('../controlers/deleteRecipe');
const getAllRecipes = require ('../controlers/getRecipe');

// ruta para buscar por id pasado por params 
router.get("/:id", async (req,res) => {
    try {
        const id = req.params.id 
        const recipe = await getRecipeById(id)
        res.status(200).json(recipe)
    } catch (error) {res.status(400).json({error: error.message})}
      
});

// ruta para buscar recetas  que puede tener o no query. si tiene query = nombre : busca  por nombre de receta
router.get("/" , async (req,res) => {
    try {
        const nombre = req.query.name
        const recipes = nombre ? await getAllRecipes(nombre.toLowerCase()) : await getAllRecipes()
        res.status(200).json(recipes)

    } catch (error) {res.status(400).json({error: error.message})}
      
})

// ruta para crear una receta en la BDD. la info se recibe por body
router.post("/" , async (req,res) => {
    try {
        const recipe = req.body
        const newRecipe = await createRecipe(recipe)
        res.status(201).send('Receta creada con exito!!')
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