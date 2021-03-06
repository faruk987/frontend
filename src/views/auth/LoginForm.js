import React, {Component} from 'react';
import axios from "axios";
import '../../assets/singup.scss'
import AuthService from "../../services/Auth/AuthService";
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:'',
        };
    }

    componentDidMount() {
        // redirect to home if already logged in
        if (AuthService.getCurrentUser()) {
            this.props.history.push('/');
        }
    }

    /*postNewUser = () =>{
        console.log(this.state.sender);
        axios.post('http://localhost:8080/comment/send?matchId='+this.state.matchId+'&sender='+this.state.sender+'&message='+this.state.message
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error.response);
            });
    };*/

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    };

       handleSubmit = event => {
           event.preventDefault();

            if (this.state.username !== ''){
                AuthService.login(this.state.username, this.state.password)
                    .then(
                        user => {
                            const { from } = this.props.location.state || { from: { pathname: "/" } };
                            this.props.history.push(from);
                            console.log(user)
                        },
                        error => {
                            console.log(error)
                        }
                    );
            }

        };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} name="username" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} name="psw" required />

                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Login</button>
                        </div>
                    </div>
                </form>
            </>
        );
    }


}

export default withRouter(LoginForm);

