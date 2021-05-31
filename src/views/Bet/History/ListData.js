import React from "react";
import 'reactjs-popup/dist/index.css';

const ListData = props =>{
    if (props.bets.result === undefined){
        return null;
    }

    return(
        <tr>
            <td>{props.bets.prediction}</td>
            <td>{props.bets.inlay}</td>
            <td>{props.bets.quotation}</td>
            <td>{props.bets.result}</td>
            <td>{props.bets.date}</td>
        </tr>
    )
};

export default ListData;
