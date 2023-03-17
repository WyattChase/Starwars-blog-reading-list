import React from "react";
import Proptypes from "prop-types";


export const Card = (props) => {

    <div className="card-image-top">
        <img src="">

        </img>
        <div className="card-body">
            <h1 className="card-title">{props.name}</h1>
            <p className="card-text">{props.Gender}</p>
            <p className="card-text">{props.hair-color}</p>
            <p className="card-text">{props.eye-color}</p>
            <button className="href=#">{props.url}</button> <i fa-heart-o></i>
        </div>
    </div>


}