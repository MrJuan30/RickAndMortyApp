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
            <div className='Status_Container'>
              <div className={`circle ${Character?.status}`}></div>
              <p className='Status_Text'>{`${Character?.status}`}</p>
            </div>
            <img src={`${Character?.image}`} alt="" />
            <h1>{`${Character?.name}`}</h1>
            <ul>
              <li><span>Origin:</span> <br />{`${Character?.origin.name}`}</li>
              <li><span>Appearances:</span> <br />{`${Character?.episode.length}`}</li>
            </ul>
          </div>
        </div>
      }
    </article>
  );
};

export default ActorCard;
