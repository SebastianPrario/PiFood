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
    const [pageTotal ,setPageTotal] = useState(0)
    const recxPag = 9;
    
    
    function pagesTotal () {
       const pageTotal = recipes?.lenght<=recxPag ? 1 : Math.ceil(recipes?.length / recxPag)
       setPageTotal(pageTotal)
    }
    
    console.log(currentPage)
    console.log(pageTotal)
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
        pagesTotal()
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
                 <button className={style.buttonpag} onClick={handlerpageprev} disabled={currentPage === 0 || currentPage>pageTotal} >Anterior</button>
                </div>
                <div className={style.page}>
                     página {currentPage + 1} de {pageTotal}  
                </div>
                <div className={style.un}>
                    <button className={style.buttonpag} onClick={handlerpagenext} disabled={currentPage === pageTotal-1 || currentPage>=pageTotal}> Siguiente </button>
                </div>
            </div>   
            {recipes.length>0 ? 
            <div className={style.cardsContainer}>
                {recipeToRender.map ((elem) => (
                    <RecipeCard 
                    key= {elem.id}
                    id= {elem.id}
                    nivel_saludable= {elem.nivel_saludable}
                    nombre = {elem.nombre}
                    image = {elem.image}
                    diet = {elem.diets}
                    closeButton={closeButton}
                    />
                ))}
            </div>  : 
            <div className={style.norecipe}>
                <div className={style.norecipetitle}>no hay recetas para mostrar</div>
            </div>}
        </div>
    ) : (
     
        <Loader />
        
    )  
}

