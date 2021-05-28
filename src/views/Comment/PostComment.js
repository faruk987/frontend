import "../../assets/scss/comment.scss";
import React, {Component} from 'react';
import axios from "axios";
import AllComments from "./AllComments";

class PostComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sender: "Faruk",
            matchId: props.matchId,
            message: '',
        };
    }

    componentDidMount() {
        console.log("did mount")
    }

    postNewComment = () =>{
        console.log(this.state.sender);
        axios.post('http://localhost:8080/comment/send?matchId='+this.state.matchId+'&sender='+this.state.sender+'&message='+this.state.message
        ).then(function (response) {
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
        console.log(this.state.message)
        event.preventDefault()

        if (this.state.message !== ''){
            this.postNewComment();
            this.setState({
                message: ''
            })

            this.props.handleChange()
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

