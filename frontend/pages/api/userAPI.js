import http from "./http-common";

class userAPI {
  register = (data) => {
    return http.post("/user/register", data);
  };
  getUserDataByUsername = (username) => {
    return http.get(`/user/data/${username}`);
  };
}

export default new userAPI();
