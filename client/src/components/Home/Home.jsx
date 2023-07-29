import React from "react";
import RecipeContainer from "../RecipeContainer/RecipeContainer";
import Nav from "../Nav/nav";
import style from './Home.module.css'

export default function Home() {
  return (
      <div className={style.body}>
        <header className={style.header}>
          <Nav />
            <div className={style.div}>
              <div className={style.titulo}>
                Que comemos hoy?
              </div>
            </div>
        </header>
        <div className={style.recipesContainer}>
          <RecipeContainer /> 
        </div>
    </div>
  )
}