import React from 'react';
import axios from "axios";

class MatchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            homeTeam:"",
            awayTeam:"",
            league:"",
            time:"",
            date:"",
            homeScore:"",
            awayScore:""
        };
        this.getMatchById = this.getMatchById.bind(this);
        console.log("the id is: " + props.id)
    }

    componentDidMount() {
        this.getMatchById();
    }

    getMatchById(){
        const self = this;
        axios.get('http://localhost:8080/matches/'+self.state.id)
            .then(function (response) {
                self.setState({
                    homeTeam:response.data.homeTeam,
                    awayTeam:response.data.awayTeam,
                    league:response.data.league,
                    time:response.data.time,
                    date:response.data.date,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <>
                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    {this.state.homeTeam} <span className="text-color-success">Vs</span> {this.state.awayTeam}
                </h1>
                <p>Match in the {this.state.league}. Starting: {this.state.time}</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <iframe width="420" height="345" src="https://www.youtube.com/embed/9rPCLe4ux-M">
                        </iframe>
                    </div>
                    <div>
                        <h2>chat</h2>
                    </div>
                </div>
            </>
        );
    }
}

export default MatchDetail;
