import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = ({ vehicle }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == vehicle.name);

  return (
    <div className="card " style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <div>Model: {vehicle.model}</div>
        <div>Class: {vehicle.vehicle_class} </div>
        <div>Length: {vehicle.length}</div>
        <div className="options d-flex justify-content-between">
          <a href={vehicle.url} className="btn btn-primary">
            Learn more!
          </a>
          <span
            onClick={() =>
              favs ? actions.deleteFav(vehicle.name) : actions.addFav(vehicle)
            }
          >
            <i className={favs ? "fas fa-heart" : "far fa-heart"}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

Vehicles.propTypes = {
  match: PropTypes.object,
};