import React from "react";
import { Link } from "react-router-dom";
import style from "./Welcome.module.css"

export default function Welcome() {
  
    return (
        <div className={style.box}>
            <h1 className={style.titulo}>Qué comemos hoy? </h1>
            <div className={style.button}>
                <Link className={style.link}
                    to='/home'>ingresar
                </Link>
            </div>
           <h1 className={style.mensaje}>elige entre miles de recetas o crea nuevas y guárdalas para vos!! </h1>
        </div>
    )
}