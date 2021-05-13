import React from "react";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FormHint from "../../components/elements/FormHint";

const ListData = props =>{
    if (props.teams.name === undefined){
        return null;
    }

    const circle ={
        display: "inline-table",
        verticalAlign: "middle",
        margin: "5px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    }

    const circleContent={
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center",
        color: "#fff",
    }

    const mystyle = {
        overflow: "auto",
        maxHeight: "300px"
    };

    let color;
    const list = [];
    props.teams.form.forEach((f) => {
        if (f === "L"){
            color = "red"
        }else if(f === "W"){
            color = "green"
        }else {
            color = "orange"
        }
        const bcolor={
            backgroundColor: color
        }

        list.push(
            <div style={Object.assign(bcolor, circle)} >
                    <span style={circleContent}> {f}</span>
                </div>)
    })

    return(
        <tr>
            <td><img src={props.teams.image} alt={props.teams.name}/></td>
            <td>{props.teams.name}</td>

            <td>

                <Popup trigger={<button className="button button-primary button-wide-mobile button-m"> Details </button>} modal>
                    <span> {props.teams.name} </span>
                    <p>Ranking: {props.teams.rank}</p>
                    <div style={mystyle}>
                        Form:
                        <p>{list}</p>
                    </div>

                </Popup>

            </td>
        </tr>
    )
};

export default ListData;
