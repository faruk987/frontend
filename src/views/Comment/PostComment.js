import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";
import AllComments from "./AllComments";
import AuthService from "../../services/Auth/AuthService";

class PostComment extends Component {
    constructor(props) {
        super(props);

        const userObj = AuthService.getCurrentUser();
        let username = '';
        if (userObj != null){
            username = userObj.username
        }

        this.state = {
            sender: username,
            matchId: props.matchId,
            message: '',
        };
    }

    componentDidMount() {
    }

    postNewComment = () =>{
        if (this.state.sender !== ''){
        axios.post('http://localhost:8080/comment/send?matchId='+this.state.matchId+'&sender='+this.state.sender+'&message='+this.state.message
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error.response);
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

