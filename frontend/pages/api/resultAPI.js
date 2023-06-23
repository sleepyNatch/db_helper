import http from "./http-common";

class resultAPI {
  getLevelResult = (username) => {
    return http.get(`/risk/result/${username}`);
  };
}

export default new resultAPI();
