import axios from "axios";

const API_URL = "http://localhost:8080/auth/user/login";

class AuthService {
    login(username, password) {
        return axios
            .get(API_URL+'?username='+username+'&password='+password)
            .then(response => {
                console.log(response.data)
                if (response.data != null) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();