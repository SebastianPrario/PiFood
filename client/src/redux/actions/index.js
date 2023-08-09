import axios from 'axios'
import URL from './../../falseenv'


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
export const DELETE_RECIPE="DELETE_RECIPE"





export const get_recipe = () => {

    try{
        return async (dispatch) => {
            const {data} = await axios.get(`${URL}/recipes/`)
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
            const {data} = await axios.get(`${URL}/recipes?name=${name}`)
            console.log(data)
            const datas = data==='no existe receta con ese nombre' ? [] : data
            console.log(datas)
            return dispatch({
                type: 'GET_RECIPE_NAME',
                payload: datas,
            })
        }catch (error) {alert ('no hay recetas con ese nombre')}
    }
    }

export const getRecipeById = (id) => {
    try{
        return async (dispatch) => {
            const {data} = await axios.get(`${URL}/recipes/${id}`)
            return dispatch({
                type: 'GET_RECIPE_ID',
                payload: data,
            })
        }
    }catch (error) {alert (error)}
}


export const add_recipe =   (recipe) => {
    const endpoint = `${URL}/recipes/`;
   try{
       
       return async (dispatch) => {
       
       const {data} = await  axios.post(endpoint, recipe)
    console.log(data)
        return dispatch({
            type: 'ADD_RECIPE',
            payload: data,
         })}
   } catch (error) {console.log (error)};
};

export const get_diets = () => {
    const endPoint = `${URL}/diets/`;
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
        type: ORDER_RECIPES,
        payload: data
    }
}

export function orderByHealth(data) {
    return {
        type: ORDER_BY_HEALTHSCORE,
        payload: data
    }
}

export function deleteRecipeById(id) {
    const endpoint = `${URL}/recipes/${id}`;
    try{
        return async (dispatch) => {
            const { data } = await  axios.delete(endpoint)
            return dispatch({
                type: DELETE_RECIPE,
                payload: id,
            })}
    } 
    catch (error) {
        console.log (error)
    }; 
}

