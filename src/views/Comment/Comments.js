import React from "react";
import 'reactjs-popup/dist/index.css';
import { withRouter } from "react-router-dom";

const Comments = () =>{
 /*   if (props.comments.comment === undefined){
        return null;
    }*/


    return(
        <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <div class="comment-section">
                <div class="comment-desc">
                    <div class="user-desv">
                        <div class="userlinks">
                    <span class="user-name">
                        naam
                    </span>
                            <span class="muted-txt"> posted 20
                        hours 33 min ago
                    </span>
                        </div>
                        <div class="likes-sec">
                            <a href="">
                                <i className="fa fa-thumbs-up"></i>
                                <span>8</span>
                            </a>
                        </div>
                    </div>
                    <p class="comment">comment</p>
                </div>
            </div>
        </>
    )
};

export default Comments;
