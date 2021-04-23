import React from 'react';
import axios from "axios";
import ListData from "./ListData"

class AllTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [{item:""}],
        };
        this.getAllTeams = this.getAllTeams.bind(this);
    }

    componentDidMount() {
        this.getAllTeams();
    }

    getAllTeams(){
        const self = this;
        axios.get('http://localhost:8080/teams/')
            .then(function (response) {
                const teams = [...self.state.teams];
                for(let i = 0; i < response.data.length; i++) {
                    teams[i] = response.data[i];
                }
                self.setState({
                    teams: teams,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let teams = null;
        teams = (
            <>
                {this.state.teams.map((teams,index) =>{
                    return <ListData key={index} teams={teams} />
                })}
            </>
        );

        return (
                <table>
                    <tbody>
                    {teams}
                    </tbody>
                </table>
        );
    }
}

export default AllTeams;
