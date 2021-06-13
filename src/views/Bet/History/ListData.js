import React from "react";
import 'reactjs-popup/dist/index.css';

const ListData = props =>{
    if (props.bets.result === undefined){
        return null;
    }
    console.log(props.bets.createdon)

    let year;
    let month;
    let day;
    let hour;
    let minute;
    try {
        year = props.bets.createdon.date.year;
        month = props.bets.createdon.date.month;
        day = props.bets.createdon.date.day;
        hour = props.bets.createdon.time.hour;
        minute = props.bets.createdon.time.minute;
    }catch (e) {
        console.log(e)
    }


    return(
        <tr>
            <td>{props.bets.predictionType}</td>
            <td>{props.bets.inlay}</td>
            <td>{props.bets.quotation}</td>
            <td>{props.bets.result}</td>
            <td>{day<10?'0'+day:day}-{month<10?'0'+month:month}-{year} {hour<10?'0'+hour:hour}:{minute<10?'0'+minute:minute}</td>
        </tr>
    )
};

export default ListData;
