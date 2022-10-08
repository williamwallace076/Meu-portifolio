import React from "react";
import "./cards.css"

export default props => {

    return(
    <div className="card-container">
        <img className="thumbnail" src={props.thumbnail} alt="capa do card"></img>
       <div className="area-info"> 
       <h2 className="card-title">{props.titulo}</h2>
        <p className="card-subtitle">{props.desc} </p>
       </div>
    </div>
    )
}