require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_VIRTUAL,DB_LOCAL
} = process.env;

const ruta = DB_VIRTUAL ? DB_VIRTUAL : `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`
const sequelize = new Sequelize(ruta , {
  logging: false, // para que no se muestre en la consola la info de sequalize
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// le pasamos la instancia de sequalize a cada funcion que define los modelos creados
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe , Diet } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
 
Recipe.belongsToMany(Diet, {through: 'RecipeDiet' })
Diet.belongsToMany(Recipe,{through: 'RecipeDiet' })
 

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
