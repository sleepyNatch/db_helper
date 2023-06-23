import http from "./http-common";

class riskAPI {
  saveRisk = (data) => {
    return http.post("/risk/saveRisk", data);
  };
  getRiskResult = (username) => {
    return http.get(`/risk/result/${username}`);
  };
}

export default new riskAPI();
