const { RESTDataSource } = require("apollo-datasource-rest");
const { citas_api_url } = require("../server");

class CitasDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = citas_api_url;
  }

  async listarCita() {
    return await this.get(`/`);
  }

  async citaPorId(id) {
    return await this.get(`/${id}`);
  }

  async citaPorIdUsuario(userId) {
    return await this.get(`/user/${userId}`);
  }

  async crearCita(agregarCita) {
    agregarCita = new Object(JSON.parse(JSON.stringify(agregarCita)));
    return await this.post("/", agregarCita);
  }

  async citaActualizada(id, cita) {
    cita = new Object(JSON.parse(JSON.stringify(cita)));
    return await this.put(`/${id}`, cita);
  }

  async eliminarCita(id){
    return await this.delete(`/${id}`);
  }
}

module.exports = CitasDataSource;
