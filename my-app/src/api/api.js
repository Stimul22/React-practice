import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "55b6935e-c8a2-40f4-b280-2d97260adde5",
  },  
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 100) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getAuthData() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  inUnFollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  inFollow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};
