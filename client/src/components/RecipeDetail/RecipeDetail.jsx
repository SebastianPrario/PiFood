import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions"; 
import { useEffect } from "react";
import pizza from './../../image/pizza.jpg'
import { useSelector, useDispatch } from "react-redux";
import style from './RecipeDetail.module.css'


export default function RecipeDetaild () {

    const recipe = useSelector(state => state.recipeDetail)
    const id = useParams().id
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect (() => {
        dispatch(getRecipeById(id))
    },[])
   
    return (
        <div className={style.container}>
          
            <img className={style.img} src={recipe?.image ? recipe.image : pizza} alt={recipe.nombre}/> 
            <div className={style.title}>
                <h1>{recipe.nombre}</h1>
            </div>
            <h3>Nivel Saludable:{recipe.nivel_saludable}</h3>
            <div>            
                <p className={style.resumen}><strong>Resumen:  </strong>{recipe.resumen}</p>
                <p className={style.resumen}><strong>Pasos:  </strong>{recipe.pasos}</p>
            </div>
            <button type="button" className={style.button} onClick={() => { navigate('/Home') }}>
                Back
            </button>
        </div>
    )

} 