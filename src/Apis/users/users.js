import api from "../api";
export const usersPageAll = function (payload) {
  return api.get("/users", payload);
};
export const userPageGet = function (id) {
  return api.get(`/users/${id}`);
};
export const userUpdate = function (id, payload) {
  return api.put(`/users/${id}`, payload);
};
