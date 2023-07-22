const axios = require ('axios');
const {  Diet } = require ('./../db');



// funcion que ingresa los datos de las dietas a la BDD. (problema hay que ejecutarla dos veces para que pueda leer los datos)

const getDiets = async () => {

    let diets = await Diet.findAll()
    
    const addDbb = async (element) => await Diet.create({nombre: element})

    if ( diets.length == 0) {
        
        const response =  await axios.get('https://run.mocky.io/v3/7c9cdb34-3bbb-4eb6-a786-6be7c8100ddd')
        //`${URL}complexSearch${API_KEY}&addRecipeInformation=true&number=1`
        const respuesta =  response.data;
        const dietas = respuesta.results.map(elem => elem.diets)
        const dieta = dietas.flat()
        const arrayDietas = []
        dieta.forEach(element => (!arrayDietas.includes(element)) && arrayDietas.push(element))
        arrayDietas.forEach(element => addDbb(element))
        diets = await Diet.findAll()
        
    }
    
   
    
    return diets
}
module.exports = getDiets