import http from "./http-common";

class userAPI {
    register = (data) => {
        return http.post("/user/register", data)
    };
}

export default new userAPI();