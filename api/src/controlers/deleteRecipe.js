const express = require ('express');
const { Recipe } = require ('./../db');

const deleteRecipe = async (ido) => {
   const deleteRecipe = await Recipe.findByPk(`${ido}`)
   if(!deleteRecipe) throw Error ('no hay nada para borrar')
   deleteRecipe.destroy()
     
}

module.exports = deleteRecipe
