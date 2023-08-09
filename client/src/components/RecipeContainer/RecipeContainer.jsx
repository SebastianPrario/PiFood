import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import style from './RecipeContainer.module.css'
import { deleteRecipeById, get_diets, get_recipe } from "../../redux/actions";
import ToolBar from "../ToolBar/ToolBar";
import Loader from './../Loader/Loader'


export default function RecipeContainer () {
    
    const dispatch = useDispatch()
    const {recipes,allRecipe} = useSelector((state) => state)
    const [ sortBy, setSortBy ] = useState('')
    
    useEffect(() => {
        dispatch(get_recipe())
        dispatch(get_diets())
    },[])
    
    const [currentPage ,setCurrentPage] = useState(0)
    const recxPag = 9;
    const pageTotal = Math.ceil(recipes?.length / recxPag) 

    const recipeToRender =  recipes.length > 0 ? recipes?.slice(recxPag * currentPage, recxPag * (currentPage+1)) : []

    function handlerpagenext () {
        setCurrentPage( currentPage + 1) 
    }
     
    function handlerpageprev () {
        setCurrentPage(currentPage - 1)
    }

    function closeButton  (id) {
        dispatch(deleteRecipeById(id))
        setSortBy('')
    }

    useEffect(() => {
        setCurrentPage(0)
    }, [recipes])
    
    return allRecipe.length > 0  ? (
        <div>
            <div className={style.tooBar}>
                <ToolBar
                setSortBy={setSortBy}
                setCurrentPage={setCurrentPage}/>
            </div>
            <div className={style.paginado}>
                <div>
                 <button className={style.buttonpag} onClick={handlerpageprev} disabled={currentPage === 0} >Anterior</button>
                </div>
                <div className={style.page}>
                     página {currentPage + 1} de {pageTotal}  
                </div>
                <div className={style.un}>
                    <button className={style.buttonpag} onClick={handlerpagenext} disabled={currentPage === pageTotal-1}> Siguiente </button>
                </div>
            </div>   
                {recipes.length>0 ? 
                <div className={style.cardsContainer}>
                    {recipeToRender.map ((elem) => (
                        <RecipeCard 
                        key= {elem.id}
                        id= {elem.id}
                        nombre = {elem.nombre}
                        image = {elem.image}
                        diet = {elem.diets}
                        closeButton={closeButton}
                        />
                    ))}
               </div>  : <div className={style.norecipe}>
                <h1 className={style.norecipetitle}> no hay recetas para mostrar</h1>
            </div>}
        </div>
    ) : (
     
        <Loader />
        
    )  
}

