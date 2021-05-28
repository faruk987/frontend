import React from 'react';
import axios from "axios";
import CommentSection from "../../components/sections/comment/CommentSection";

class BetDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            homeTeam: props.homeTeam,
            awayTeam: props.awayTeam,
            prediction:"",
            predictionText:""
        };
        //this.getMatchById = this.getMatchById.bind(this);
    }

   /* componentDidMount() {
        this.getMatchById();
    }*/

    /*getMatchById(){
        const self = this;
        axios.get('http://localhost:8080/football/matches/'+self.state.id)
            .then(function (response) {
                self.setState({
                    homeTeam:response.data.homeTeam,
                    awayTeam:response.data.awayTeam,
                    league:response.data.league,
                    time:response.data.time,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };*/


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
                <label style={{marginRight: "8px"}}>Your inlay</label>
                <p>
                    Your prediction is: {this.state.predictionText}
                </p>
                <input type="number" name="inlay" min="10" />
                <p/>
                <button className="button button-primary button-m" type="button">Place BET</button>
            </>
        );
    }
}

export default BetDetail;
