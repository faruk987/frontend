import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";
import AuthService from "../../services/Auth/AuthService";


class ProfileForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: AuthService.getCurrentUser(),
            password: '',
            passwordrep: '',
        };
    }

    componentDidMount() {

    }

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

    render() {
        return (
            <>
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

                <button onClick={() => {if(window.confirm('Are you sure to delete your account?')){ alert("ok")}}} style={{marginTop: "4px", width: "30%", float:"right"}} className="button button-red button-m" type="button">Forget me!</button>
            </>
        );
    }


}

export default ProfileForm;

