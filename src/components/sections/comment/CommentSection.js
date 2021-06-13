import React from 'react';
import PostComment from "../../../views/Comment/PostComment";
import AllComments from "../../../views/Comment/AllComments";

const CommentSection = (props) => {

    return (
        <div>
            {/*<PostComment matchId={props.matchId}/>*/}
            <AllComments matchId={props.matchId}/>
        </div>
    );
};

export default CommentSection;