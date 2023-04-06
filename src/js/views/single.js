import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let character = store.people.find((item, index) => index == params.theIndex);
  let planet = store.planets.find((item, index) => index == params.theIndex);
  let vehicle = store.vehicles.find((item, index) => index == params.theIndex);

  return (
    <div className="jumbotron">
      <div className="top-half d-flex">
		{props.category == "character"?( <img
        className="w-50"
        src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (parseInt(params.theIndex)+1) + ".jpg?raw=true"}
        alt="Card image cap"
      ></img>):props.category == "planet"?(<img
        className="w-50"
        src={planet.name == "Tatooine" ? "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg":"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/" + (parseInt(params.theIndex)+1) + ".jpg?raw=true"}
        alt="Card image cap"
      />):"Image Loading..."}
	 
        
        <div className="name-description-section">
		<h4>{props.category == "character"
            ? character.name
            : props.category == "planet"
            ? planet.name
            : props.category == "vehicle"
            ? vehicle.name
            : "loading"}</h4>
          
        </div>
      </div>
	  <div className="bottom-half row">
		<div className="col"> {props.category == "character"
            ? (<div><h6>Gender: </h6>{character.gender}</div>)
            : props.category == "planet"
            ? (<div><h6>Diameter: </h6>{planet.diameter}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Model: </h6>{vehicle.model}</div>)
            : "loading"}</div>
		<div className="col"></div>
		<div className="col"></div>
		<div className="col"></div>
		<div className="col"></div>
		<div className="col"></div>
		<div className="col"></div>
	  </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
