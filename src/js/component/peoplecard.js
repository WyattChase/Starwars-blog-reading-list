import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleCard = ({character, index}) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
	let char = store.people.find((item, index) => index == params.theIndex)


  return (
    <div className="card">
      <img
        className="card-img-top"
        src={"https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/characters/" + {index} + ".jpg?raw=true"}
        alt=""
      ></img>
      <div className="card-body">
        <h5 classname="card-title">{char.name}</h5>
        <p className="card-text">{char.gender}</p>
        <p className="card-text">{char.height}</p>
      </div>
    </div>
  );
};

PeopleCard.propTypes = {
    match: PropTypes.object,
  };
  