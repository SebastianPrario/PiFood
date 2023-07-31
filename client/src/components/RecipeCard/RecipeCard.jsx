import React from "react";
import { Link } from "react-router-dom";
import pizza from './../../image/pizza.jpg'
import style from './RecipeCard.module.css'

export default function RecipeCard ({id,diet,nombre,image, closeButton} ) {
   
    const dietsList = diet?.map((e) => e + " - ")

    const isBdd = id > 10000000
   
    return (
        <div className={style.container} >
                {isBdd && <button className={style.close} onClick={() => closeButton(id)}> X </button>}
                <img className={style.image} src={image || pizza} alt={nombre}/>
            
            <Link to={`/detail/${id}`} className={style.title}>
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