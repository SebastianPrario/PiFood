import React from "react";
import style from "./Dietas.module.css"
import listDietas from './../../image/listado de dietas.jpg'
import { useNavigate } from "react-router-dom";

export default function Dietas() {
    const navigate = useNavigate()  
    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={listDietas}  alt='listadodietas' />
            </div>    
            <button type="button" className={style.button} onClick={() => { navigate('/Home') }}>Back</button>
        </div>
    )
}

