import React from "react";
import { Link } from "react-router-dom";
import pizza from './../../image/pizza.jpg'
import style from './RecipeCard.module.css'

export default function RecipeCard ({id,diet,nombre,image}) {
   
    const dietsList = diet?.map((e) => e + " - ")
   
    return (
        <div className={style.container} >
            <Link to={`/detail/${id}`} className={style.title}>
                <img className={style.image} src={image || pizza} alt={nombre}/>
                <div> 
                    <p>{nombre}</p> 
                </div>
                <div className={style.dietsList}>
                    {dietsList}
                </div>
            </Link>
        </div>
    )
}