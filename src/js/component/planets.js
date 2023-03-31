import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = ({ planet }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == planet.name);
  const [favplanet, setplanets] = useState([]); //UseState run the function from planets (API)
  
  
  
  useEffect(() => {
    setplanets(store.favplanetData)
    }, [store.favplanetData] // In Here we call out again to keep stored the data on re-load the page
    )

  return (
    <div className="card" style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/tattooine-twin-suns.jpg"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <div>Diameter: {planet.diameter} </div>
        <div>Population: {planet.population}</div>
        <div>Climate: {planet.climate}</div>
        <div className="options d-flex justify-content-between">
          <a href="#" className="btn btn-primary">
            Learn more!
          </a>
          <a onClick={() => actions.addFavorites(planet)} className="btn btn-outline-warning fa fa-heart" />

        </div>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.object,
};
