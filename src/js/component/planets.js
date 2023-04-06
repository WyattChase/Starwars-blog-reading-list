import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = ({ planet, index }) => {
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
        src={planet.name == "Tatooine" ? "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg":"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/planets/" + (index + 1) + ".jpg?raw=true"}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <div>Diameter: {planet.diameter} </div>
        <div>Population: {planet.population}</div>
        <div>Climate: {planet.climate}</div>
        <div className="options d-flex justify-content-between">
        <Link to={"/planet/details/" + index}> 
          <button className="btn btn-primary">
            Learn more!
          </button>
          </Link>
          <a onClick={() => actions.addFavorites(planet)} className="btn btn-outline-warning fa fa-heart" />

        </div>
      </div>
    </div>
  );
};

Planets.propTypes = {
  match: PropTypes.object,
};
