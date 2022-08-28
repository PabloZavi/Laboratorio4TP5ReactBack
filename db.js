const Sequelize = require('sequelize');
const modeloIntrumento = require('./models/instrumentos');

const sequelize = new Sequelize('instrumentosdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

//Con esto creo la tabla en MySql según el modelo instrumento.js
const Instrumento = modeloIntrumento(sequelize, Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas sincronizadas')
})

module.exports = {
    Instrumento
}