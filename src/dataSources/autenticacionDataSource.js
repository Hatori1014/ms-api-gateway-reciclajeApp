const { RESTDataSource } = require("apollo-datasource-rest");
const { autenticacion_api_url } = require("../server");

class AutenticacionDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = autenticacion_api_url;
  }

  async listarUsuarios() {
    return await this.get(`/autenticacion/users/`);
  }

  async usuarioPorId(userId) {
    return await this.get(`/autenticacion/${userId}/`);
  }

  async iniciarSesion(credenciales) {
    credenciales = new Object(JSON.parse(JSON.stringify(credenciales)));
    return await this.post(`/iniciarSesion/`, credenciales);
  }

  async actualizarToken(token) {
    token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
    return await this.post(`/actualizar/`, token);
  }

  async crearUsuario(datosUsuario) {
    try {
      datosUsuario = new Object(JSON.parse(JSON.stringify(datosUsuario)));
      return await this.post(`/autenticacion/`, datosUsuario);
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarUsuario(idUsuario, usuario) {
    usuario = new Object(JSON.parse(JSON.stringify(usuario)));
    return await this.put(`/autenticacion/update/${idUsuario}/`, usuario);
  }

  async eliminarUsuario(id) {
    id = new Object(JSON.parse(JSON.stringify(id)));
    return await this.delete(`/autenticacion/delete/${id}/`);
  }
}

module.exports = AutenticacionDataSource;
