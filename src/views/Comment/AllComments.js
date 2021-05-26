import React from 'react';
import axios from "axios";
import Comments from "./Comments";

class AllComments extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            eventId: props.eventId,
            comments: [{item: ""}],
        };

        this.getAllComments = this.getAllComments().bind(this);
    }

    componentDidMount() {
        this.getAllComments();
    }

    getAllComments(){
        const self = this;
        axios.get('http://localhost:8080/comment/'+this.state.eventId)
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
            {/*{comments}*/}
            <Comments/>
            </>
        );
    }
}
export default AllComments;