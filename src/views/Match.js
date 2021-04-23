import React from 'react';
import { useLocation } from "react-router-dom";
// import sections

import MatchPage from "../components/sections/match/MatchPage";

const Match = (props) => {
const location = useLocation();

  return (
    <>
        <MatchPage id={location.state.id}/>
    </>
  );
}

export default Match;