import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import style from './ToolBar.module.css'

export default function ToolBar({ setCurrentPage, setSortBy ,sortBy}) {

   const dispatch = useDispatch()

    const dietList = useSelector((state) => state.diets);
    const diestByName = dietList?.map((elem) => elem.nombre);
    
    const handleChange = (event) => {
     
        if (event.target.value === "A-z" || event.target.value === 'Z-a') {
            setCurrentPage(0)
            setSortBy({...sortBy, 
                alfaOrder: event.target.value,
                healthOrder: 'default'
        })
     
        } else {
            setCurrentPage(0)
            setSortBy({...sortBy, 
                healthOrder: event.target.value,
                alfaOrder: 'default'
            })

        }
    }

    const handleChangeDiets = (event) => {
        setCurrentPage(0);
        setSortBy({...sortBy, 
            orderDiets: event.target.value,
            orderBdd: ''})
    }

    const handleChangeBdd = (event) => {
        setCurrentPage(0);
        setSortBy({...sortBy, 
            orderBdd: event.target.value,
            orderDiets: ""})
    }

    return (
        <div className={style.toolbar}>
            <div className={style.orderContainer}>
                <span>Ordenar por:</span>
                <select onChange={(e) => handleChange(e)} value={sortBy.alfaOrder} className={style.selectMain}>
                    <option value="default">Ordenar por...</option>
                    <option value="A-z">A-z</option>
                    <option value="Z-a">Z-a</option>
                    <option value="L-H">+Saludable+</option>
                    <option value="H-L">-Saludable-</option>
                </select>
            </div>
            <div className={style.filterContainer}>
                <span>Filtrar dietas:</span>
                <select onChange={(e) => handleChangeDiets(e)} className={style.selectMain}>
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
                <select onChange={(e) => handleChangeBdd(e)} className={style.selectMain} defaultValue={'TODAS'}>
                    <option value="TODAS">Todas</option>
                    <option value='Bdd'  key='Bdd'>Propias</option>
                    <option value='Api' key='Api'>API</option>                 
                </select>
            </div>
        </div>
    )
}
