const { Router } = require('express');
const dietsRouter = require ('./diets.js')
const recipeRouter = require ('./recipe.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/recipes", recipeRouter);

router.use("/diets", dietsRouter);





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
