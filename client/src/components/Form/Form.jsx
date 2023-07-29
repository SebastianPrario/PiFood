import React from 'react';
import { add_recipe , get_diets} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Form.module.css'

const Form = () => {
   
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(get_diets());
  }, [dispatch])


  const navigate = useNavigate()
  
  const [recipe , setRecipe] = useState({
      nombre: "",
      image: "",
      nivel_Saludable: "",
      resumen: "",
      pasos: "",
      diets: [],
   })

   const { nombre, image, nivel_Saludable, resumen, pasos, diets } = recipe

 
   const listaDiets = useSelector( (state) => state.diets)
   const list = listaDiets?.map((e)=> e)
   
 
   
 
   function handleChange(e) {
         
         const nameinput = e.target.name;
         const valueinput = e.target.value;
         setRecipe({
                  ...recipe,
                  [nameinput]: valueinput,
         });
   } 
     
      const deleteDiet = (diet) => {
         setRecipe({ ...recipe, diets: diets.filter((d) => d !== String(diet))})
      }

     function handleChangeDiets(e) {
         setRecipe({ ...recipe, diets: [...recipe.diets, e.target.value]})
      }
     

     function handleSubmit(event) { 
      event.preventDefault()
      if (!nombre) return alert ("Debe ingresar un nombre")
      if (!nivel_Saludable) return alert ("Nivel Saludable entre 0 y 100")
      if (diets.length === 0) return alert ("Seleccionar al menos una dieta")
      if (!resumen) return alert ("Debe escribir un resumen de la receta")
      if (!pasos) return alert ("Debe escribir los pasos para preparar")   
      dispatch(add_recipe(recipe))
      setRecipe({
      nombre: "",
      image: "",
      nivel_Saludable: "",
      resumen: "",
      pasos: "",
      diets: [],
      })
      alert ('tu receta ha sido creada con exito')
      }
     
   return (
      <div className={style.container}>
         <form className={style.form} onSubmit={(e)=>handleSubmit(e)}>
            <div className={style.nombre}>    
               <label htmlFor='name'></label>
               <input 
                  name='nombre'
                  type='text' 
                  value={recipe.nombre}
                  autoComplete='off'
                  onChange={(e)=>{handleChange(e)}}>
               </input>
            </div>
            <div className={style.img}>
               <label htmlFor='image'></label>
               <input
                  type='text'
                  name='image'
                  value={image}
                  autoComplete='off'
                  onChange={(e)=>{handleChange(e)}}>
               </input>
            </div>
            <div className={style.nivel}>
               <label htmlFor='nivel_saludable'></label>
               <input 
                  type='number'
                  name='nivel_Saludable'
                  min={1}
                  max={100}
                  value={nivel_Saludable}
                  onChange={(e)=>{handleChange(e)}}>
               </input>
            </div>

            <div className={style.resumen}>
               <label htmlFor='resumen'></label>
               <textarea className={style.textarea}
               type='text'
               name='resumen'
               value={resumen}
               onChange={(e)=>{handleChange(e)}}>
               </textarea>
            </div>

            <div className={style.pasos}>
               <label htmlFor='paso'> </label>
               <textarea className={style.textarea}
               type="text"
               name='pasos'
               value={pasos}
               onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className={style.diets}>
               <span>Seleccionar dietas</span>
                  <select onChange={(e) => handleChangeDiets(e)} defaultValue={'0'}>
                     {list.map((diet) => (
                     <option key={diet.id} value={diet.id}>{diet.nombre}</option>
                     ))}
                  </select>
               <div>
                  {diets && diets.map((d) => {
                     const label = list.filter((diet) => diet.id === Number(d))
                     return (
                        <div key={label[0].nombre} className={style.listItem}>
                           {label[0].nombre}
                           <button type='button' onClick={() => deleteDiet(label[0].id)}>X</button>
                        </div>
                     )   
                  })}
               </div>
            </div>      
            <div className={style.buttons}>
               <button className={style.button} type='submit'>Crear Receta</button>
               <button className={style.button} type="button"  onClick={() => { navigate('/home') }}>Atras</button>
            </div>
         </form>
      </div>
   )
}

export default Form;
