import React from 'react';
import { useLocation } from "react-router-dom";
import BetPage from "../components/sections/bet/BetPage";
// import sections


const Bet = (props) => {
    const location = useLocation();

    return (
        <>
            <BetPage homeTeam={location.state.homeTeam} awayTeam={location.state.awayTeam} id={location.state.id}/>
        </>
    );
}

export default Bet;