const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  xdescribe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({
          image: 'url://miimage.jpg',
          resumen: 'Ejemplo de plato',
          nivel_saludable: 10,
          pasos: 'serie de pasos ',
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ 
          nombre: 'Milanesa a la napolitana',
          image: 'url://miimage.jpg',
          resumen: 'Ejemplo de plato',
          nivel_saludable: 10,
          pasos: 'serie de pasos ',
        })
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
      });
    });
  });
});
