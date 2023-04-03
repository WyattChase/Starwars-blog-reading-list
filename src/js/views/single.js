import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let character = store.people.find((item, index) => index == params.theIndex)
	let planet = store.planets.find((item, index) => index == params.theIndex)
	let vehicle = store.vehicles.find((item, index) => index == params.theIndex)

	return (
		<div className="jumbotron">
			{props.category == "character" ? character.name + " " + character.gender + " " + character.height + " " + character.birth_year + " " + character.skin_color + " " + character.hair_color + " " + character.eye_color : 
			props.category == "planet" ? planet.name + " " + planet.climate + " " + planet.diameter + " " + planet.population + " " + planet.rotation_period + " " + planet.orbital_period : 
			props.category == "vehicle" ? vehicle.name : "loading"}

			<div>This is the name of a {character.name}</div>
			{/* {props.category == "character" ? character.gender : props.category == "planet" ? planet.name : props.category == "vehicle" ? vehicle.name : "loading"}
			{props.category == "character" ? character.height : props.category == "planet" ? planet.name : props.category == "vehicle" ? vehicle.name : "loading"}
			{props.category == "character" ? character.birth_year : props.category == "planet" ? planet.name : props.category == "vehicle" ? vehicle.name : "loading"}  */}
			
			
			
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
