function validar (recipe) {
    const errors = {}
    if (!recipe.nombre) {errors.nombre = "Debe ingresar un nombre"};
    if (recipe.resumen.length<150) {errors.resumen="Debe escribir un resumen de al menos 150 caracteres"};
    if (!recipe.pasos) {errors.pasos="Debe escribir los pasos para preparar"};
    if (!recipe.nivel_saludable) {errors.nivel_saludable="Debe ingresar el Nivel Saludable"};
    return errors
 }
 
export default validar