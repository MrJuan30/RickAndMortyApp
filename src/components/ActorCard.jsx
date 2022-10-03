import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles1.css";

const ActorCard = ({ chacurl }) => {
  const [Character, setCharacter] = useState();
  useEffect(() => {
    axios
      .get(chacurl)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="actor-card__container">
      {
        <div className="container">
          <div className="card">
            <img src={`${Character?.image}`} alt="" />
            <h1>{`${Character?.name}`}</h1>
            <ul>
                <li><span>Status:</span>{`${Character?.status}`}</li>
                <li><span>Origin:</span>{`${Character?.origin.name}`}</li>
                <li><span>Appearances:</span>{`${Character?.episode.length}`}</li>
            </ul>
          </div>
        </div> 
      }
    </article>
  );
};

export default ActorCard;
