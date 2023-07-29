import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { getRecipeByName } from '../../redux/actions/index'


export default function SearchBar() {
   
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInput(e){
    e.preventDefault();
    setName(e.target.value);
    dispatch(getRecipeByName(e.target.value))
  }

  function handleSubmit(e){
    e.preventDefault();
    setName('');  
  }
    
  return( 
    <>
      <input type="text" 
        placeholder="Buscar Recetas..." 
        onChange={e => handleInput(e)}
      ></input>
    </>
 )
};
     