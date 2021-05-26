import React from 'react';
import PostComment from "../../../views/Comment/PostComment";
import AllComments from "../../../views/Comment/AllComments";
import Comments from "../../../views/Comment/Comments";

const CommentSection = () => {

    return (
        <div>
            <PostComment/>
            <Comments/>
            <Comments/>
        </div>
    );
};

export default CommentSection;