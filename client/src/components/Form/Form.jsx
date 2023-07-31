import React from 'react';
import { add_recipe , get_diets, get_recipe} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Form.module.css'

export default function Form () {
   
   const dispatch = useDispatch()

   const recipeNombres = useSelector((state) => state.recipes)
   const listaDiets = useSelector( (state) => state.diets)
   
   
   useEffect(() => {
      dispatch(get_diets())
      dispatch(get_recipe());
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

   const [ error,setError ] = useState ({
      nombre: "Debe ingresar un nombre",
      image: "",
      nivel_Saludable: "",
      resumen: "Debe escribir un resumen de al menos 150 caracteres",
      pasos: "Debe escribir los pasos para preparar",
      diets: [],
   })
   
   const { nombre, image, nivel_Saludable, resumen, pasos, diets } = recipe

   function validar (recipe) {
      const errors = {}
      if (!recipe.nombre) {errors.nombre = "Debe ingresar un nombre"};
      if (recipe.resumen.length<150) {errors.resumen="Debe escribir un resumen de al menos 150 caracteres"};
      if (!recipe.pasos) {errors.pasos="Debe escribir los pasos para preparar"};
      return errors
   }
   
   const list = listaDiets?.map((e)=> e)
     
 
   function handleChange(e) {
         
         const nameinput = e.target.name;
         const valueinput = e.target.value;
         setRecipe({
                  ...recipe,
                  [nameinput]: valueinput,
         });
         setError(validar({...recipe,[nameinput]: valueinput }))
   } 
    
   const deleteDiet = (diet) => {
         setRecipe({ ...recipe, diets: diets.filter((d) => d !== String(diet))})
   }

   function handleChangeDiets(e) {
         setRecipe({ ...recipe, diets: [...recipe.diets, e.target.value]})
         setError(validar({...recipe,diets: e.target.value }))
   }
    
     function handleSubmit(event) { 
         event.preventDefault()
         if(Object.keys(error).length) {return alert ('Faltan datos en la receta')}
         if(recipe.diets<=1) {return alert ("Seleccionar al menos una dieta")}
         else {   
            dispatch(add_recipe(recipe))
            setRecipe({
               nombre: "",
               image: "",
               nivel_Saludable: "",
               resumen: "",
               pasos: "",
               diets: [],
            })
            setError({
               nombre: "Debe ingresar un nombre",
               image: "",
               nivel_Saludable: "",
               resumen: "Debe escribir un resumen de al menos 150 caracteres",
               pasos: "Debe escribir los pasos para preparar",
               diets: [],
            })
            alert ('tu receta ha sido creada con exito')
         }
      }
      
   return (
      <div className={style.container}>
         <form className={style.form} onSubmit={(e)=>handleSubmit(e)}>
            <div className={style.nombre}>  
               <label htmlFor='name'></label>
               <input 
                  name='nombre'
                  type='text' 
                  value={nombre}
                  autoComplete='off'
                  onChange={(e)=>{handleChange(e)}}>
               </input>  
               <span>{error.nombre}</span>
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
               <span>{error.resumen}</span>
            </div>

            <div className={style.pasos}>
               <label htmlFor='paso'> </label>
               <textarea className={style.textarea}
               type="text"
               name='pasos'
               value={pasos}
               onChange={(e)=>{handleChange(e)}}/>
               <span>{error.pasos}</span>
            </div>
            <div>{error.diets}</div>
            <div className={style.diets}>                       {/* seleccionamos la dieta del menu */}
               <span>Seleccionar dietas</span>  
                  <select onChange={(e) => handleChangeDiets(e)} defaultValue={'0'}>
                     {list.map((diet) => (
                     <option key={diet.id} value={diet.id}>{diet.nombre}</option>
                     ))}
                  </select> 
               <div>                                             {/* creamos un div en donde muestre las dietas elegidas  */}
                  {diets && diets.map((d) => {                     {/*tenemos que crear un array en donde esten los nombres  */}
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
               <button className={style.button} type='button' onClick={(e)=>handleSubmit(e)}>Crear Receta</button>
               <button className={style.button} type="button"  onClick={() => navigate('/home') }>Atras</button>
            </div>
         </form>
      </div>
   )
}


