//Se llama al typedef (esquema) de cada submodulo
const citasTypeDefs = require('./citasTypeDefs');
const autenticacionTypeDefs = require('./autenticacionTypeDefs');

//Se unen
const schemasArrays = [citasTypeDefs, autenticacionTypeDefs];

//Se exportan
module.exports = schemasArrays;