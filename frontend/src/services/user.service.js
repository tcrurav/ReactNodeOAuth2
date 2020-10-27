import http from "../utils/http-common";

class UserDataService {
  signin(data) {
    return http.post("/api/signin", data);
  }

  getAll() {
    return http.get("/api/users");
  }

  get(id) {
    return http.get(`/api/users/${id}`);
  }

  create(data) {
    return http.post("/api/users", data);
  }

  update(id, data) {
    return http.put(`/api/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/api/users`);
  }

}

export default new UserDataService();