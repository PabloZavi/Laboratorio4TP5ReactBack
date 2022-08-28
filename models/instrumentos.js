//var Sequelize = require('sequelize');
//var sequelize = require('../db.js');


module.exports = (sequelize, type) => {
    return sequelize.define('instrumento', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        instrumento: type.STRING,
        marca: type.STRING,
        modelo: type.STRING,
        imagen: type.STRING,
        precio: type.STRING,
        costoEnvio: type.STRING,
        cantidadVendida: type.STRING,
        descripcion: type.STRING
            
        
    });
}