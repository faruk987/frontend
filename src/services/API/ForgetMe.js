import axios from "axios";
import AuthService from "../Auth/AuthService";

class ForgetMe {
    user() {
        axios.delete('http://localhost:8083/user/delete?username='+AuthService.getCurrentUser().username)
            .then(response => {
                console.log(response.data)
            }).catch(function (error) {
            console.log(error);
        });;
    }

    comments() {
        const cm = {
            method: 'delete',
            url: 'http://localhost:8081/comment/all?username='+AuthService.getCurrentUser().username
        };

        axios(cm)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    gambling() {
        const gm = {
            method: 'delete',
            url: 'http://localhost:8084/gamble/all?username='+AuthService.getCurrentUser().username
        };

        axios(gm)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new ForgetMe();