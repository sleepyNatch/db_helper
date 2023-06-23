import http from "./http-common";

class resultAPI {
  getLevelResult = (username) => {
    return http.post(`/risk/result/ ${username}`);
  };
}

export default new resultAPI();
