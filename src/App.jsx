import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./components/Loading";
import getRandomNumber from "./utils/getRandomNumber";
import NavBar from "./components/NavBar";
import LocationInfo from "./components/LocationInfo";
import ActorCard from "./components/ActorCard";
import NoActorsCard from "./components/NoActorsCard";

function App() {
  const [Dimension, setDimension] = useState();
  const [TextSearch, setTextSearch] = useState("");

  useEffect(() => {
    let URL;

    if (TextSearch) {
      URL = `https://rickandmortyapi.com/api/location/${TextSearch}`;
    } else {
      URL = `https://rickandmortyapi.com/api/location/${getRandomNumber()}`;
    }
    axios
      .get(URL)
      .then((res) => setDimension(res.data))
      .catch((err) => console.log(err));
    console.log(Dimension);
  }, [TextSearch]);

  const handleSubmit = (searchtext) => {
    searchtext.preventDefault();
    setTextSearch(searchtext.target.search.value);
  };

  return (
    <div className="App">
      {Dimension ? (
        <article>
          <div className="Nav-container">
            <NavBar handleSubmit={handleSubmit} />
          </div>
          <div className="Location-container">
            <LocationInfo Dimension={Dimension} />
          </div>

          <div>
            {Dimension.residents.length > 0 ? (
              <div className="cards">
                {Dimension?.residents.map((chacurl) => (
                  <ActorCard
                    chacurl={chacurl}
                    key={chacurl}
                    className="ActorCard"
                  />
                ))}
              </div>
            ) : (
              <div className="error">
                <NoActorsCard/>
              </div>
            )}
          </div>
        </article>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default App;
