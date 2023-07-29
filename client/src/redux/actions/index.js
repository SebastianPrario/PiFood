import axios from 'axios'

export const GET_RECIPE = "GET_RECIPE"
export const ADD_RECIPE = "ADD_RECIPE"
export const REMOVE_RECIPE = "REMOVE_RECIPE"
export const UPDATE_RECIPE = "UPDATE_RECIPE"
export const GET_DIETS = "GET_DIETS"
export const GET_RECIPE_NAME = "GET_RECIPE_NAME"
export const GET_RECIPE_ID= "GET_RECIPE_ID"
export const FILTER_DIETS ="FILTER_DIETS"
export const ORDER_RECIPES = "ORDER_RECIPES"
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE"
export const FILTER_BDD="FILTER_BDD"





export const get_recipe = () => {

    try{
        return async (dispatch) => {
            const {data} = await axios.get('http://localhost:3001/recipes/')
            return dispatch({
                type: 'GET_RECIPE',
                payload: data,
            })
        }
    }catch (error) {alert (error)}
}

export const getRecipeByName=(name) => {

    
        return async (dispatch) => {
         try{ 
            const {data} = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: 'GET_RECIPE_NAME',
                payload: data,
            })
        }catch (error) {alert ('no hay recetas con ese nombre')}
    }
    }

export const getRecipeById = (id) => {
    try{
        return async (dispatch) => {
            const {data} = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: 'GET_RECIPE_ID',
                payload: data,
            })
        }
    }catch (error) {alert (error)}
}


export const add_recipe =   (recipe) => {
    const endpoint = 'http://localhost:3001/recipes/';
   try{
        console.log(recipe)
       return async (dispatch) => {
       
       const {data} = await  axios.post(endpoint, recipe)
      
        return dispatch({
            type: 'ADD_RECIPE',
            payload: data,
         })}
   } catch (error) {console.log (error)};
};

export const get_diets = () => {
    const endPoint = 'http://localhost:3001/diets/';
        try{
            return async (dispatch) => {
                const {data} = await axios.get(endPoint)
                return dispatch({
                    type: 'GET_DIETS',
                    payload: data,
                })
            }
        }catch (error) {console.log(error)}
}

export const filterByDiets = (data) => {
         return ({
                    type: 'FILTER_DIETS',
                    payload: data,
                })
}

export const filterByBdd = (data) => {
  
     return ({
               type: 'FILTER_BDD',
               payload: data,
           })
}

export function orderByRecipe(data) {
    return {
        type: "ORDER_RECIPES",
        payload: data
    }
}

export function orderByHealth(data) {
    return {
        type: "ORDER_BY_HEALTHSCORE",
        payload: data
    }
}


