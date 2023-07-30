import React, { useEffect, useState,  } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import style from './RecipeContainer.module.css'
import { get_diets, get_recipe } from "../../redux/actions";
import ToolBar from "../ToolBar/ToolBar";
import Loader from './../Loader/Loader'



export default function RecipeContainer () {
    
    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)
    const [ sortBy, setSortBy ] = useState('')
    
    useEffect(() => {
        dispatch(get_recipe())
        dispatch(get_diets())
    },[dispatch])
    
    const [currentPage ,setCurrentPage] = useState(0)
    const recxPag = 9;
    const pageTotal = Math.ceil(recipes?.length / recxPag) 

   
  
    const recipeToRender = recipes?.slice(recxPag * currentPage, recxPag * (currentPage+1) )
   
    function handlerpagenext () {
        setCurrentPage( currentPage + 1) 
    }
     
    function handlerpageprev () {
        setCurrentPage(currentPage - 1)
    }


    return recipes.length > 0  ? (
        <div>
            <div className={style.tooBar}><ToolBar
                setSortBy={setSortBy}
                setCurrentPage={setCurrentPage}
            />
            </div>
            <div className={style.paginado}>
                <div className={style.un}>
                <button onClick={handlerpageprev} disabled={currentPage === 0} >Anterior</button>
                </div>
                <div className={style.un}> página {currentPage + 1} de {pageTotal}  </div>
                <div className={style.un}>
                <button onClick={handlerpagenext} disabled={currentPage === pageTotal-1}> Siguiente </button>
                </div>
            </div>  
            
            <div className={style.cardsContainer}>
            {recipeToRender.map ((elem) => (
                <RecipeCard 
                    key= {elem.id}
                    id= {elem.id}
                    nombre = {elem.nombre}
                    image = {elem.image}
                    diet = {elem.diets}/>

                ))
            }
            </div>
        </div>
    ) : (
        
        <Loader />
    )  
}

