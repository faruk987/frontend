import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";

class PostComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sender: props.username,
            matchId: props.eventId,
            message: '',
        };
    }

    postNewComment = () =>{
        console.log(this.state.user);
        axios.post('http://localhost:8080/comment/',{
            sender: this.state.sender,
            matchId: this.state.matchId,
            message: this.state.message,
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error.response);
            });
    };

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    };


    handleSubmit = event => {
        event.preventDefault();
        this.postNewComment();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>New comment</label>
                        <input className={'inputClass'} type={'text'} value={this.state.message} onChange={this.handleMessageChange} required={true}/>
                    </div>
                    <button type={'submit'}>Send</button>
                </form>
            </div>
        );
    }


}

export default PostComment;

