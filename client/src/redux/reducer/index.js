import { FILTER_BDD,ORDER_RECIPES,ORDER_BY_HEALTHSCORE,GET_DIETS,GET_RECIPE,GET_RECIPE_NAME,GET_RECIPE_ID,FILTER_DIETS, DELETE_RECIPE } from "../actions";


const inicialState =  { 
    recipes: [],
    allRecipe: [],
    diets: [],
    recipeDetail: {},  
}

const rootReducer = (state= inicialState,action) => {
    
    switch (action.type) {

        case GET_DIETS: return {
            ...state, diets: action.payload
        };

        case GET_RECIPE_NAME: return {
            ...state,
            recipes:  action.payload
        }
        case GET_RECIPE: return {
            ...state , allRecipe: action.payload,
                        recipes: action.payload
        };

        case GET_RECIPE_ID: return {
            ...state , recipeDetail: action.payload
        }

        
        case FILTER_DIETS: 
            const allRecipeFilter = state.allRecipe;
            const recipeFilter = allRecipeFilter.filter( (data) =>{
                return data.diets?.includes(action.payload)
            })
            return {
                ...state , recipes: action.payload === 'allDiets' ? allRecipeFilter : recipeFilter
            
        }
        case FILTER_BDD: 
            
            let recipeFilterBdd = state.allRecipe
            let recipesBdd = []
            if( action.payload === 'TODAS') {recipesBdd=recipeFilterBdd}
            if( action.payload === 'Api') {recipesBdd = recipeFilterBdd.filter( elem => elem.id>100000)}
            if( action.payload === 'Bdd')recipesBdd = recipeFilterBdd.filter( elem => elem.id<100000)
            return {
               ...state , recipes: recipesBdd
            }

        case ORDER_RECIPES:
            let recipesSortBy = []
            if( action.payload === 'A-z') {
                recipesSortBy = state.allRecipe.sort((a, b) => {
                    if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1
                    return -1
                })
            }
            if( action.payload === 'Z-a') {
                recipesSortBy = state.allRecipe.sort((a, b) => {
                    if (b.nombre.toLowerCase() > a.nombre.toLowerCase()) return 1
                    return -1
                })
            }    
            return {
                ...state,
                recipes: recipesSortBy
            }

        case ORDER_BY_HEALTHSCORE:
             const orderByScore = action.payload === "L-H" ? state.allRecipe.sort((a, b) => {
                                   
                if ((a.nivel_saludable - b.nivel_saludable) < 0) return 1
                    else return -1
                   }) : state.allRecipe.sort((a, b) => {
                                    
                                    if ((a.nivel_saludable - b.nivel_saludable) > 0) return 1
                                    else return -1
                                })
                                return{
                                    ...state,
                                    recipes: orderByScore
        }
        
        case DELETE_RECIPE:
            const recipes = state.allRecipe.filter( elem => elem.id !== action.payload)
            return {
                ...state,
                recipes: recipes,
                allRecipe: recipes
            }
        
        


       default: return state

    }





   
        
}

export default rootReducer