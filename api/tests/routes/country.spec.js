/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  nombre: 'pastel de papa',
	resumen: 'consiste en una pasta que se come con salsa',
	nivel_Saludable: '88',
	pasos: 'pasta dentro de una olla',
	diets:[1],
 };

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
   .then(() => Recipe.create(recipe)));
});

describe('GET /recipes/sarasa/', () => { 
  it('should get 404 when the URL doesn´t exist', () =>
    agent.get('/recipes/123456/sarasa').expect(404)
  );
});
;
describe('GET /recipes/1258', () => {
  it('should get 200 when have a ID', () =>
    agent.get('/recipes/12').expect(200)
  );
});