import React from 'react';
import axios from "axios";
import Comments from "./Comments";
import PostComment from "./PostComment";
import AuthService from "../../services/Auth/AuthService";

class AllComments extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            eventId: props.matchId,
            comments: [{item: ""}],
        };

        const user = AuthService.getCurrentUser();
    }

    componentDidMount() {
        this.getAllCommentsByMatchId();
    }

    getAllCommentsByMatchId = () =>{
        const self = this;
        axios.get('http://localhost:8081/comment/all/'+this.state.eventId)
            .then(function (response) {
                const comments = [...self.state.comments];
                for(let i = 0; i < response.data.length; i++) {
                    comments[i] = response.data[i];
                }
                self.setState({
                    comments: comments,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let comments = null;
        comments = (
            <>
                {this.state.comments.map((comments,index) =>{
                    return <Comments key={index} comments={comments} />
                })}
            </>
        );

        return (<>
                <PostComment handleChange={this.getAllCommentsByMatchId()} matchId={this.state.eventId}/>
                {comments}
            </>
        );
    }
}
export default AllComments;