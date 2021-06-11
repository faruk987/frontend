import React from 'react';
import axios from "axios";
import ListData from "./ListData"
import AuthService from "../../../services/Auth/AuthService";

class AllMatches extends React.Component {
    constructor(props) {
        super(props);

        const userObj = AuthService.getCurrentUser();
        let username = '';
        if (userObj != null){
            username = userObj.username
        }

        this.state = {
            user: username,
            bets: [{item:""}],
        };
        this.getAllBets = this.getAllBets.bind(this);
    }

    componentDidMount() {
        this.getAllBets();
    }

    getAllBets(){
        const self = this;
        axios.get('http://localhost:8084/gamble/all?user='+this.state.user)
            .then(function (response) {
                const bets = [...self.state.bets];
                for(let i = 0; i < response.data.length; i++) {
                    bets[i] = response.data[i];
                }
                self.setState({
                    bets: bets,
                });
                return "succes"
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        let bets = null;
        bets = (
            <>
                {this.state.bets.map((bets,index) =>{
                    return <ListData key={index} bets={bets} />
                })}
            </>
        );

        return (
            <table>
                <tbody>
                <tr>
                    <th>Prediction</th>
                    <th>Inlay</th>
                    <th>Quotation</th>
                    <th>Result</th>
                    <th>Date</th>
                </tr>
                {bets}
                </tbody>
            </table>
        );
    }
}

export default AllMatches;
