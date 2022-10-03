import React from "react";
import '../styles1.css'

const NavBar = ({handleSubmit}) => {
    return (
        <div className="nav-container">
            <h1>Rick And <span>Wiki</span></h1>
            <img src="https://wallpapercave.com/wp/wp6737038.png" alt="Rick and Morty Logo" />
            <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                    <h3>INSERT DIMENSION ID:</h3>
                    <input type="text" id="search"/>
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};

export default NavBar;
