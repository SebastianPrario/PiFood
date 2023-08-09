import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../redux/actions/index'
import style from './SearchBar.module.css'
import search from './../../image/search.png'


export default function SearchBar() {
   
  const dispatch = useDispatch();
  const [, setName] = useState('');

  function handleInput(e){
    e.preventDefault();
    setName(e.target.value);
    dispatch(getRecipeByName(e.target.value))
   
  }

    
  return( 
    <div className={style.searchBox}> 
      
      <input type="search" className={style.searchInput}
        placeholder="Buscar Recetas..." 
        onChange={e => handleInput(e)}
        autoComplete='off'>
      </input>
      
      <img src={search} alt="search" height={40}width={30}/>
      

    </div>
 )
};
     