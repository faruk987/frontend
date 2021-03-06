import React from "react";
import 'reactjs-popup/dist/index.css';
import { withRouter } from "react-router-dom";

const ListData = props =>{
    if (props.matches.homeTeam === undefined){
        return null;
    }

    const toMatch = () => props.history.push({
        pathname: '/match',
        state: { id: props.matches.id }
    });

    return(
        <tr>
            <td>{props.matches.homeTeam}</td>
            <td>{props.matches.awayTeam}</td>
            <td>{props.matches.time}</td>
            <td>
                <button className={"button button-primary button-wide-mobile button-m"} style={{marginBottom: "4px"}} type="button" onClick={toMatch}>
                    WATCH
                </button>
            </td>
        </tr>
    )
};

export default withRouter(ListData);
