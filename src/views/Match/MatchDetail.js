import React from 'react';
import axios from "axios";
import CommentSection from "../../components/sections/comment/CommentSection";
import { withRouter } from "react-router-dom";

class MatchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            quotation:"",
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
        axios.get('http://localhost:8082/matches/'+self.state.id)
            .then(function (response) {
                console.log(response)
                self.setState({
                    homeTeam:response.data.homeTeam,
                    awayTeam:response.data.awayTeam,
                    quotation:response.data.quotation,
                    league:response.data.league,
                    time:response.data.time,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    toBet = () => this.props.history.push({
        pathname: '/bet',
        state: {
            quotation: this.state.quotation,
            id: this.state.id,
            homeTeam:this.state.homeTeam,
            awayTeam:this.state.awayTeam
        }
    });

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
                    <div >
                        <button className={"button button-primary"} onClick={this.toBet} type="button" >
                            PLACE A BET!
                        </button>
                    </div>

                    <div>
                        <h2>Comments</h2>
                        <CommentSection matchId={this.state.id}/>
                    </div>
            </>
        );
    }
}

export default withRouter(MatchDetail);
