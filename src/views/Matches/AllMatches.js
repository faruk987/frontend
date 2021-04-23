import React from 'react';
import axios from "axios";
import ListData from "./ListData"

class AllMatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: [{item:""}],
        };
        this.getAllMatches = this.getAllMatches.bind(this);
    }

    componentDidMount() {
        this.getAllMatches();
    }

    getAllMatches(){
        const self = this;
        axios.get('http://localhost:8080/matches/')
            .then(function (response) {
                const matches = [...self.state.matches];
                for(let i = 0; i < response.data.length; i++) {
                    matches[i] = response.data[i];
                }
                self.setState({
                    matches: matches,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let matches = null;
        matches = (
            <>
                {this.state.matches.map((matches,index) =>{
                    return <ListData key={index} matches={matches} />
                })}
            </>
        );

        return (
                <table>
                    <tbody>
                    <tr>
                        <th>Home</th>
                        <th>Away</th>
                        <th>Time</th>
                    </tr>
                    {matches}
                    </tbody>
                </table>
        );
    }
}

export default AllMatches;
