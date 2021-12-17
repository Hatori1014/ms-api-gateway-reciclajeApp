const autenticacionResolver = require('./autenticacionResolver');
const citasResolver = require('./citasResolver');
const lodash = require('lodash');
const resolvers = lodash.merge(autenticacionResolver, citasResolver);
module.exports = resolvers;

