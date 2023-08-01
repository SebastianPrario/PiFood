const { Router } = require('express');
const dietsRouter = require ('./diets.js')
const recipeRouter = require ('./recipe.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/recipes", recipeRouter);

router.use("/diets", dietsRouter);

router.use(( req, res, next) => {  // caso en que se ponga una url distinta a la solicitada (residual)
    res.status(404).send('dirección no encontrada');
});
  
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
