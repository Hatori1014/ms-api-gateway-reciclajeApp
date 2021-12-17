const autenticacionResolver = {
  Query: {
    listarUsuarios: (_, {}, { dataSources }) => {
      return dataSources.authAPI.listarUsuarios();
    },
    usuarioPorId: (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken)
        return dataSources.authAPI.usuarioPorId(userId);
      return null;
    },
  },

  Mutation: {
    iniciarSesion: (_, { credenciales }, { dataSources }) => {
      return dataSources.authAPI.iniciarSesion(credenciales);
    },
    actualizarToken: (_, { refresh }, { dataSources }) => {
      return dataSources.authAPI.actualizarToken(refresh);
    },
    registroUsuario: (_, { usuario }, { dataSources }) => {
      return dataSources.authAPI.crearUsuario(usuario);
    },
    eliminarUsuario: (_, { id }, { dataSources }) => {
      return dataSources.authAPI.eliminarUsuario(id);
    },
    actualizarUsuario: (_, { idUsuario, registroUsuario }, { dataSources }) => {
      return dataSources.authAPI.actualizarUsuario(idUsuario, registroUsuario);
    },
  },
};
module.exports = autenticacionResolver;
