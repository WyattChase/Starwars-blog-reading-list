import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const Vehicles = ({ vehicle, index }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == vehicle.name);
  const [favVehicle, setVehicle] = useState([]); //UseState run the function from planets (API)
  
  
  
  useEffect(() => {
    setVehicle(store.favVehicleData)
    }, [store.favVehicleData] // In Here we call out again to keep stored the data on re-load the page
    )

  return (
    <div className="card " style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src={vehicle.img_url}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <div>Model: {vehicle.model}</div>
        <div>Class: {vehicle.vehicle_class} </div>
        <div>Length: {vehicle.length}</div>
        <div className="options d-flex justify-content-between">
        <Link to={"/vehicle/details/" + index}> 
          <button className="btn btn-primary">
            Learn more!
          </button>
          </Link>
          <a onClick={() => actions.addFavorites(vehicle)} className={favs ? "fas fa-heart" : "far fa-heart"}>
          </a>
        </div>
      </div>
    </div>
  );
};

Vehicles.propTypes = {
  match: PropTypes.object,
};
