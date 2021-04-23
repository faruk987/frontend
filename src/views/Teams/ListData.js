import React from "react";
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ListData = props =>{
    if (props.teams.name === undefined){
        return null;
    }

    const mystyle = {
        overflow: "auto",
        maxHeight: "300px"
    };

    return(
        <tr>
            <td><img style={{width: "15%"}} src={props.teams.image} alt={props.teams.name}/></td>
            <td>{props.teams.name}</td>

            <td>

                <Popup trigger={<button className="button button-primary button-wide-mobile button-m"> Details </button>} modal>
                    <span> {props.teams.name} </span>
                    <p>Stadium: {props.teams.stadium}</p>
                    <div style={mystyle}>
                        <p>{props.teams.description}</p>
                    </div>

                </Popup>

            </td>

{/*            <Popup modal trigger={<button>Click Me</button>}>
                {close => <Content close={close} />}
            </Popup>*/}
        </tr>
    )
};

export default ListData;
