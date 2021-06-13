import React from "react";
import 'reactjs-popup/dist/index.css';

const Comments = (props) =>{
    if (props.comments.message === undefined){
        return null;
    }

    var year = props.comments.createdon.date.year;
    var month = props.comments.createdon.date.month;
    var day = props.comments.createdon.date.day;
    var hour = props.comments.createdon.time.hour;
    var minute = props.comments.createdon.time.minute;

    return(
        <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <div className="comment-section">
                <div className="comment-desc">
                    <div className="user-desv">
                        <div className="userlinks">
                    <span className="user-name">
                        {props.comments.sender}
                    </span>
                            <span className="muted-txt"> {day<10?'0'+day:day}-{month<10?'0'+month:month}-{year} {hour<10?'0'+hour:hour}:{minute<10?'0'+minute:minute}</span>
                        </div>
                    </div>
                    <p className="comment"> {props.comments.message} </p>
                </div>
            </div>
        </>
    )
};

export default Comments;
