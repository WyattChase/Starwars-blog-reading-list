import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = ({ char }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == char.name);
  const [favPeople, setPeople] = useState([]); //UseState run the function from planets (API)
  
  
  
  useEffect(() => {
    setPeople(store.favPeopleData)
    }, [store.favPeopleData] // In Here we call out again to keep stored the data on re-load the page
    )

  return (
    <div className="card " style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{char.name}</h5>
        <div>Gender: {char.gender}</div>
        <div>Height: {char.height} cm</div>
        <div>Birth Year: {char.birth_year}</div>
        <div className="options d-flex justify-content-between">
          <a href={char.url} className="btn btn-primary">
            Learn more!
          </a>
           <a onClick={() => actions.addFavorites(char)} className={favs ? "fas fa-heart" : "far fa-heart"}></a>
        </div>
      </div>
    </div>
  );
};

People.propTypes = {
  match: PropTypes.object,
};
