import http from "./http-common";

class riskAPI {
  saveRisk = (data) => {
    return http.post("/risk/saveRisk", data);
  };
}

export default new riskAPI();
