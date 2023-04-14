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
		{props.category == "character"?( <img objectFit="contain" 
        className="img" 
        src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (parseInt(params.theIndex)+1) + ".jpg?raw=true"}
        alt="Card image cap"
      ></img>):props.category == "planet"?(<img
        className="img"
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
            {props.category == "character"
            ? (<div><h6>Description: </h6>{character.description}</div>)
            : props.category == "planet"
            ? (<div><h6>Diameter: </h6>{planet.diameter}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Model: </h6>{vehicle.model}</div>)
            : "loading"}
          
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
		<div className="col">{props.category == "character"
            ? (<div><h6>Height: </h6>{character.height}</div>)
            : props.category == "planet"
            ? (<div><h6>Rotation Period: </h6>{planet.rotation_period}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Vehicle Class: </h6>{vehicle.vehicle_class}</div>)
            : "loading"}</div>
		<div className="col">{props.category == "character"
            ? (<div><h6>Hair Color: </h6>{character.hair_color}</div>)
            : props.category == "planet"
            ? (<div><h6>Orbital Period: </h6>{planet.orbital_period}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Manufacturer: </h6>{vehicle.manufacturer}</div>)
            : "loading"}</div>
		<div className="col">{props.category == "character"
            ? (<div><h6>Skin Color: </h6>{character.skin_color}</div>)
            : props.category == "planet"
            ? (<div><h6>Population: </h6>{planet.population}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Crew: </h6>{vehicle.crew}</div>)
            : "loading"}</div>
		<div className="col">{props.category == "character"
            ? (<div><h6>Eye Color: </h6>{character.eye_color}</div>)
            : props.category == "planet"
            ? (<div><h6>Terrain: </h6>{planet.terrain}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Passengers: </h6>{vehicle.passengers}</div>)
            : "loading"}</div>
		<div className="col">{props.category == "character"
            ? (<div><h6>Birth Year: </h6>{character.birth_year}</div>)
            : props.category == "planet"
            ? (<div><h6>Climate: </h6>{planet.climate}</div>)
            : props.category == "vehicle"
            ? (<div><h6>Cost in Credits: </h6>{vehicle.cost_in_credits}</div>)
            : "loading"}</div>
	  </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
