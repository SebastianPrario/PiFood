import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'


export function Nav() {

   return (
        <nav className={style.nav} >
            <div className={style.div}>
            <SearchBar/>
            <Link to='/form'>Crear Receta</Link>
            </div>
        </nav>
        )
};

export default Nav;