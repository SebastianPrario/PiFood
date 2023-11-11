const axios = require ('axios');
const {  Diet } = require ('../db');

// funcion que crea en la BDD las dietas 
const createDiet = async () => {
    
    let diets = await Diet.findAll()
    
    const addDbb = async (element) => await Diet.create({nombre: element})

    if ( diets.length === 0) {
        
        const response =  await axios.get(`https://run.mocky.io/v3/7c9cdb34-3bbb-4eb6-a786-6be7c8100ddd`)
        //'https://run.mocky.io/v3/7c9cdb34-3bbb-4eb6-a786-6be7c8100ddd'
        //``${URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100``
        const dietas = response.data.results.map(elem => elem.diets)
        const arrayDietas = []
        dietas.flat().forEach(element => (!arrayDietas.includes(element)) && arrayDietas.push(element))
        arrayDietas.forEach(element => addDbb(element))
        diets = await Diet.findAll()

    }
    
   
    
}

// funcion que buscan en la BDD las dietas

const getDiets = async () => {

    let diets = await Diet.findAll()
 
    return diets
}
module.exports = {getDiets , createDiet}