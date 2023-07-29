import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { orderByHealth, orderByRecipe , filterByDiets , filterByBdd } from "../../redux/actions/index"
import './ToolBar.css'

export default function ToolBar({ setCurrentPage, setSortBy }) {

   const dispatch = useDispatch()
    
    const dietList = useSelector((state) => state.diets);
    const diestByName = dietList?.map((el) => el.nombre);
    
    const handleChange = (e) => {
     
        if (e.target.value === "A-z" || e.target.value === 'Z-a') {
            dispatch(orderByRecipe(e.target.value))
            setCurrentPage(0)
            setSortBy(e.target.value)
     
        } else {
            dispatch(orderByHealth(e.target.value))
            setCurrentPage(0)
            setSortBy(e.target.value)
        }
    }

    const handleChangeDiets = (e) => 
        {dispatch(filterByDiets(e.target.value))
         setCurrentPage(0);
        
    
    }

    const handleChangeBdd = (e) => {
        dispatch(filterByBdd(e.target.value))
        setCurrentPage(0);
    }

    useEffect(() => {

    }, [dispatch] )

    return (
        <div className="toolbar">
            <div className="orderContainer">
                <span>Ordenar por:</span>
                <select onChange={(e) => handleChange(e)} defaultValue={'default'} className="selectMain">
                    <option value="default">Ordenar por...</option>
                    <option value="A-z">A-z</option>
                    <option value="Z-a">Z-a</option>
                    <option value="L-H">Lower</option>
                    <option value="H-L">Higher</option>
                </select>
            </div>
            {/* <div>
                <button onClick={() => window.location.reload()} className="reset">
                    Recargar Recetas
                </button>
            </div> */}
            <div className="filterContainer">
                <span>Filtrar dietas:</span>
                <select onChange={(e) => handleChangeDiets(e)} className="selectMain">
                    <option value="allDiets">Todas las dietas</option>
                    {diestByName?.map((el) => {
                        return (
                            <option value={el} key={el}>{el}</option>
                        )

                    })}
                </select>
            </div>
            <div>
            <span>Filtrar por Origen:</span>
                <select onChange={(e) => handleChangeBdd(e)} className="selectMain">
                    <option value="TODAS">Todas</option>
                    <option value='Bdd' key='Bdd'>Propias</option>
                    <option value='Api' key='Api'>API</option>                 
                </select>
            </div>
        </div>
    )
}
