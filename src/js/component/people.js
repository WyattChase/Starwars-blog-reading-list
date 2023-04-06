import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const People = ({ char, index }) => {
  const { store, actions } = useContext(Context);
  let favs = store.favorites.find((fav) => fav.name == char.name);
  const [favPeople, setPeople] = useState([]); //UseState run the function from planets (API)
  
  
  
  useEffect(() => {
    setPeople(store.getPeopleData)
    }, [store.getPeopleData] // In Here we call out again to keep stored the data on re-load the page
    )

  return (
    <div className="card " style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + (index + 1) + ".jpg?raw=true"}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{char.name}</h5>
        <div>Gender: {char.gender}</div>
        <div>Height: {char.height} cm</div>
        <div>Birth Year: {char.birth_year}</div>
        <div className="options d-flex justify-content-between">
          <Link to={"/character/details/" + index}> 
          <button className="btn btn-primary">
            Learn more!
          </button>
          </Link>
           <a onClick={() => actions.addFavorites(char)} className={favs ? "fas fa-heart" : "far fa-heart"}></a>
        </div>
      </div>
    </div>
  );
};

People.propTypes = {
  match: PropTypes.object,
};
