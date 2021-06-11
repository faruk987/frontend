import React from 'react';
import axios from "axios";
import CommentSection from "../../components/sections/comment/CommentSection";
import AuthService from "../../services/Auth/AuthService";
import PostComment from "../Comment/PostComment";
import authHeader from "../../services/Auth/authHeader";

class BetDetail extends React.Component {
    constructor(props) {
        super(props);

        const userObj = AuthService.getCurrentUser();
        let username = '';
        if (userObj != null){
            username = userObj.username
        }

        this.state = {
            id: props.id,
            user: username,
            quotation:props.quotation,
            homeTeam: props.homeTeam,
            awayTeam: props.awayTeam,
            prediction:"",
            predictionText:"",
            inlay:10
        };
    }

    componentDidMount() {
    }

    placeBet = () =>{
        if (this.state.user !== ''){
            axios.post('http://localhost:8084/gamble/?eventId='+this.state.id+
                '&prediction='+this.state.prediction+
                '&quotation='+this.state.quotation+
                '&inlay='+this.state.inlay+
                '&user='+this.state.user,
                {
                    headers:authHeader()
                }
            ).then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error.response);
                });
        }

    };


    on1Click = () =>{
        this.setState({
            prediction: 1,
            predictionText: this.state.homeTeam + " is going to win this match!"
        })
    }

    on2Click = () =>{
        this.setState({
            prediction: 2,
            predictionText: this.state.awayTeam + " is going to win this match!"
        })
    }

    onXClick = () =>{
        this.setState({
            prediction: 3,
            predictionText: "It is going to end in a draw!"
        })
    }

    handleInlayChange = event => {
        this.setState({
            inlay: event.target.value
        })
    };

    handleSubmit = event => {
     //controleren en versturen naar backend
        event.preventDefault();

        if (this.state.prediction !== '' && this.state.inlay >= 10){
            this.placeBet()
        }
    };

    render() {
        return (
            <>
                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    {this.state.homeTeam} <span className="text-color-success">Vs</span> {this.state.awayTeam}
                </h1>
                <p>Let's go! Place your <span className="text-color-success">BET</span></p>
                <div style={{display:"flex", justifyContent: "space-evenly"}}>
                    <button className="button button-secondary button-m" type="button" onClick={this.on1Click}>1</button>
                    <button className="button button-dark button-m" type="button" onClick={this.onXClick}>X</button>
                    <button className="button button-red button-m" type="button" onClick={this.on2Click}>2</button>
                </div>
                <p/>
                <p>
                    In case of a <u>win of the home team</u> you tick the first field (1),
                    in case of a <u>draw</u> the second field (x),
                    or in case of a <u>victory of the away team</u> the third (2).
                    You do not have to predict the exact number of goals,
                    it is only about the ultimate winner or a draw.
                </p>
                <hr/>
                <p/>
                <p>
                    Quotation: {this.state.quotation}<br/>
                    Your prediction is: {this.state.predictionText}
                </p>
                <label style={{marginRight: "8px"}}>Your inlay</label>
                <input value={this.state.inlay} onChange={this.handleInlayChange} type="number" name="inlay" min="10" />
                <p/>
                <button onClick={this.handleSubmit} className="button button-primary button-m" type="button">Place BET</button>
            </>
        );
    }
}

export default BetDetail;
