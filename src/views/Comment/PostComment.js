import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";
import AllComments from "./AllComments";
import AuthService from "../../services/Auth/AuthService";
import authHeader from "../../services/Auth/authHeader";
import Header from "../../components/layout/Header";

class PostComment extends Component {

    constructor(props) {
        super(props);

        let user ='';
        try {
            user = AuthService.getCurrentUser().username;
        }catch (e) {

        }

        this.state = {
            sender: user,
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
                url: 'http://localhost:8081/comment/send?matchId='+this.state.matchId+'&sender='+this.state.sender+'&message='+this.state.message
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

