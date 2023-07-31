import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../redux/actions/index'
import style from './SearchBar.module.css'


export default function SearchBar() {
   
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInput(e){
    e.preventDefault();
    setName(e.target.value);
    dispatch(getRecipeByName(e.target.value))
  }

    
  return( 
    <div className={style.searchBox}> 
      
      <input type="text" className={style.searchInput}
        placeholder="Buscar Recetas..." 
        onChange={e => handleInput(e)}
      ></input>
      <h3 className={style.titulo}>buscar..</h3>

    </div>
 )
};
     