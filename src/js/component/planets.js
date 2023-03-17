import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = ({ planet }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == planet.name);

  return (
    <div className="card" style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/tattooine-twin-suns.jpg"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <div>Diameter: {planet.diameter} km</div>
        <div>Population: {planet.population}</div>
        <div>Climate: {planet.climate}</div>
        <div className="options d-flex justify-content-between">
          <a href="#" className="btn btn-primary">
            Learn more!
          </a>
          <span
            onClick={() =>
              favs ? actions.deleteFav(planet.name) : actions.addFav(planet)
            }
          >
            <i className={favs ? "fas fa-heart" : "far fa-heart"}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.object,
};
