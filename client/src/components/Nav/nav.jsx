import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'


export function Nav() {

   return (
        <nav className={style.nav} >
            <div className={style.div}>
            <Link to='/dietas' className={style.button}><button className={style.button}>dietas</button></Link>
            <SearchBar/>
            <Link to='/form' className={style.button}><button className={style.button}>crear</button></Link>
            </div>
        </nav>
        )
};

export default Nav;