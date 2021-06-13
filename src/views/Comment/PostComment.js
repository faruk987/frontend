import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";
import AllComments from "./AllComments";
import AuthService from "../../services/Auth/AuthService";
import authHeader from "../../services/Auth/authHeader";

class PostComment extends Component {

    constructor(props) {
        super(props);

        const userObj = AuthService.getCurrentUser();
        let username = '';
        if (userObj != null){
            username = userObj.username
        }

        this.state = {
            user:userObj.accessToken,
            sender: username,
            matchId: props.matchId,
            message: '',
        };
    }



    componentDidMount() {
    }

    postNewComment = () =>{
         if (this.state.sender !== ''){
            const config = {
                method: 'post',
                url: 'http://localhost:8081/comment/send?matchId='+this.state.matchId+'&sender='+this.state.sender+'&message='+this.state.message,
                headers: {
                    'Authorization': 'Bearer eyJraWQiOiIvcHJpdmF0ZUtleS5wZW0iLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJGYXJ1ayIsImp0aSI6IjZmYjhkZmJiLTI5YjItNDg5Ny1iODYyLTkzYjU3Y2E2ZWY0MCIsInN1YiI6ImZhcnVrMDkiLCJ1cG4iOiJmYXJ1azA5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZmFydWswOSIsImdyb3VwcyI6WyJVc2VyIl0sImF1ZCI6InVzaW5nLWp3dCIsImV4cCI6MTYyMzQ5MzE0NCwiaWF0IjoxNjIzNDg5NTQ0LCJhdXRoX3RpbWUiOiJOdW1lcmljRGF0ZXsxNjIzNDg5NTQ0IC0-IDEyIGp1bi4gMjAyMSAxMToxOTowNCBDRVNUfSJ9.WTJta1twRLzyT2gCp74R_9tuWRca9muyzSXHcVo2puo6T8AyvM_CFVUh-P3Ek3455zqzz-9aCuctwkQwBve-NDf2ZgfwXUcC9RBCf8Gf1HBjj2chJflG68hslMJHRBgl-vMWb_hw3DApN_kYt_a9cYCOP6ZXpO0TOvLe9rtTF-Rafy4UkUIOUPzSF89ms20mOr_CXGhvxKPL1WVPc4BaW1EANlOwYX35vNAH8X2T8UQoJEssCCdjuixEy5BvnOOtScUiB74uisDtEkBTTYYQZeK8SFlZQNgOUhaeeVskTgYeAfvPZB8yELpZASPDdRn1EBQDJ8qjkeZi-AmJ7KPwOQ'
                }
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    };

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    };


    handleSubmit = event => {
        event.preventDefault()

        if (this.state.message !== ''){
            this.postNewComment();
            this.setState({
                message: ''
            })

            return this.props.handleChange
        }
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>New comment</label>
                        <input type={'text'} value={this.state.message} onChange={this.handleMessageChange} required={true}/>
                    </div>
                    <button type={'submit'}>Send</button>
                </form>
            </>
        );
    }


}

export default PostComment;

