const { gql } = require("apollo-server");

const autenticacionTypeDefs = gql`
  type Tokens {
    refresh: String!
    access: String!
  }

  type Access {
    access: String!
  }

  input IngresoCredenciales {
    username: String!
    password: String!
  }

  input registroUsuarioInput {
    username: String!
    password: String!
    name: String!
    email: String!
    phone: String!
    address: String!
  }

  type UserDetail {
    id: Int!
    username: String!
    password: String!
    name: String!
    email: String!
    phone: String!
    address: String!
  }

  type Query {
    listarUsuarios: [UserDetail]!
    usuarioPorId(userId: Int!): UserDetail!
  }

  type Mutation {
    iniciarSesion(credenciales: IngresoCredenciales!): Tokens!
    actualizarToken(refresh: String!): Access!
    registroUsuario(usuario: registroUsuarioInput!): Tokens!
    actualizarUsuario(
      idUsuario: Int!
      registroUsuario: registroUsuarioInput!
    ): UserDetail!
    eliminarUsuario(id: Int!): Boolean!
  }
`;

module.exports = autenticacionTypeDefs;
