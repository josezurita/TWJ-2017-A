/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'localDiskDb',
  attributes: {
    nombre:{
      type:"string"
    },
    listaMascotasDeRaza:{
      collection: 'Mascota', //nombre del modelo a relacionar
      via: 'idRaza' //Nombre del Foreign key
    }
  }
};

