const express = require('express')
const router = express.Router()
const {getDiets, createDiet} = require('../controlers/diets')




router.get("/" , async (req,res) => {
    
    try {
        await createDiet()
        await getDiets()
        const diets = await getDiets()
        res.status(200).json(diets)

    } catch (error) {res.status(400).json({error: error.message})}
      
})


module.exports = router

