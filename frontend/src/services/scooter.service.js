import http from "../utils/http-common";

class ScooterDataService {
  getAll() {
    return http.get("/api/scooters");
  }

  get(id) {
    return http.get(`/api/scooters/${id}`);
  }

  create(data) {
    return http.post("/api/scooters", data);
  }

  update(id, data) {
    return http.put(`/api/scooters/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/scooters/${id}`);
  }

}

export default new ScooterDataService();