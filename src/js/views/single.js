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
			{props.category == "character" ? character.name : props.category == "planet" ? planet.name : props.category == "vehicle" ? vehicle.name : "loading"} 

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
