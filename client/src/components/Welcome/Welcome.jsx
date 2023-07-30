import React from "react";
import { Link } from "react-router-dom";
import style from "./Welcome.module.css"

export default function Welcome() {
  
    return (
        <div className={style.box}>
            <h1 className={style.mensaje}>Qué comemos hoy? </h1>
            <div className={style.button}>
            <Link 
            to='/home'>ingresar
            </Link>
           </div>
        </div>
    )
}
