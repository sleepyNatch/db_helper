import http from "./http-common";

class riskAPI {
    saveRisk = (data) => {
        return http.post("/user/saveRisk", data)
    };
}

export default new riskAPI();