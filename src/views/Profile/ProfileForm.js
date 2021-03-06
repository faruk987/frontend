import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";
import AuthService from "../../services/Auth/AuthService";
import ForgetMe from "../../services/API/ForgetMe";
import { withRouter } from "react-router-dom";


class ProfileForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: AuthService.getCurrentUser().username,
            password: '',
            passwordrep: '',
            coins: '',
        };

    }

    componentDidMount() {
       this.getUsersWallet()
    }

    getUsersWallet =()=> {
        axios.get('http://localhost:8083/user/wallet?username='+this.state.user)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        coins: response.data
                    })
                }
            }).catch(function (error) {
            console.log(error.response);
        });
    };

    forgetUser =() =>{
        ForgetMe.comments();
        ForgetMe.gambling();
        ForgetMe.user();
    };
 /*   postNewComment = () =>{
        axios.post('http://localhost:8080/comment/send?matchId='+this.state.matchId+'&sender='+this.state.sender+'&message='+this.state.message
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error.response);
            });
    };*/

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


    handleSubmit = event => {
        event.preventDefault()
    };

    handleForgetMe = () => {
        this.forgetUser();
        AuthService.logout()
        this.props.history.push("/");
    };

    render() {
        return (
            <>
                <h4>Your BitCoins: <span className="text-color-primary">{this.state.coins}</span></h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>New password</label>
                        <input type={'password'} value={this.state.password} onChange={this.handlePasswordChange} required={true}/>
                    </div>
                    <div>
                        <label>New comment</label>
                        <input type={'password'} value={this.state.passwordrep} onChange={this.handlePasswordRepChange} required={true}/>
                    </div>
                    <button type={'submit'}>Update password</button>
                </form>

                <button onClick={() => {if(window.confirm('Everything will be deleted permanently. Are you sure?')){ this.handleForgetMe()}}} style={{marginTop: "4px", width: "30%", float:"right"}} className="button button-red button-m" type="button">Forget me!</button>
            </>
        );
    }


}

export default withRouter(ProfileForm);

