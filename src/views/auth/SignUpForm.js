import React, {Component} from 'react';
import axios from "axios";
import '../../assets/singup.scss'

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            email:'',
            password:'',
            passwordrep:''
        };
    }

    componentDidMount() {

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

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    };
    handlePasswordRepChange = event => {
        this.setState({
            passwordrep: event.target.value
        })
    };


/*    handleSubmit = event => {
        event.preventDefault()

        if (this.state.message !== ''){
            this.postNewUser();
            this.setState({
                message: ''
            })
        }
    };*/

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                            <label htmlFor="username"><b>Username</b></label>
                            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} name="username" required />

                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" value={this.state.email} onChange={this.handleEmailChange} name="email" required />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} name="psw" required />

                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" value={this.state.passwordrep} onChange={this.handlePasswordRepChange} name="psw-repeat" required />

                            <div className="clearfix">
                                <button type="submit" className="signupbtn">Sign Up</button>
                            </div>
                    </div>
                </form>
            </>
        );
    }


}

export default SignUpForm;

