import React from 'react';
import axios from "axios";
import CommentSection from "../../components/sections/comment/CommentSection";

class MatchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            homeTeam:"",
            awayTeam:"",
            league:"",
            time:"",
            homeScore:"",
            awayScore:""
        };
        this.getMatchById = this.getMatchById.bind(this);
    }

    componentDidMount() {
        this.getMatchById();
    }

    getMatchById(){
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
    };

    render() {
        return (
            <>
                <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    {this.state.homeTeam} <span className="text-color-success">Vs</span> {this.state.awayTeam}
                </h1>
                <p>Match in the {this.state.league}. Starting at: {this.state.time}</p>
                    <div>
                        <iframe width="420" height="345" src="https://www.youtube.com/embed/9rPCLe4ux-M">
                        </iframe>
                    </div>
                    <div>
                        <h2>Comments</h2>
                        <CommentSection matchId={this.state.id}/>
                    </div>
            </>
        );
    }
}

export default MatchDetail;
