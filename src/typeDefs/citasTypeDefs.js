const { gql } = require("apollo-server");

const citasTypeDefs = gql`
  type CitasDetail {
    id: Int!
    idUsuario: Int!
    fechaRecoleccion: String!
    horaRecoleccion: String!
    tipoMaterial: String!
    pesoMaterial: Float!
    fechaCreacionCita: String
  }
  input CitasInput {
    id: Int!
    idUsuario: Int!
    fechaRecoleccion: String!
    horaRecoleccion: String!
    tipoMaterial: String!
    pesoMaterial: Float!
    fechaCreacionCita: String
  }

  type Mutation {
    crearCita(agregarCita: CitasInput!): CitasDetail!
    actualizarCita(idCita: Int!, citaActualizada: CitasInput!): CitasDetail!
    eliminarCita(idCita: Int!): CitasDetail!
    
  }

  type Query {
    citaPorId(id: Int!): CitasDetail!
    listarCita: [CitasDetail]!
    citaPorIdUsuario(idUsuario: Int!): [CitasDetail]!
  }
`;

module.exports = citasTypeDefs;
