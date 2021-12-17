const citasResolver = {
  Query: {
    citaPorId: (_, { id }, { dataSources }) => {
      return dataSources.citasAPI.citaPorId(id);
    },

    listarCita: (_, {}, { dataSources }) => {
      return dataSources.citasAPI.listarCita();
    },

    citaPorIdUsuario: (_, { idUsuario }, { dataSources }) => {
      return dataSources.citasAPI.citaPorIdUsuario(idUsuario);
    },
  },
  Mutation: {
    crearCita: (_, { agregarCita }, { dataSources }) => {
      return dataSources.citasAPI.crearCita(agregarCita);
    },
    actualizarCita: (_, { idCita, citaActualizada }, { dataSources }) => {
      return dataSources.citasAPI.citaActualizada(idCita, citaActualizada);
    },
    eliminarCita: (_, {idCita}, {dataSources}) => {
      return dataSources.citasAPI.eliminarCita(idCita);
    },
  },
};
module.exports = citasResolver;
