import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
  
    const routeToShop = () => {
      console.log(history);
      history.push("/pizza");
    };
  
    return (
      <div className="home-wrapper">
        <img
          className="home-image"
          src="https://source.unsplash.com/F6-U5fGAOik"
          alt=""
        />
        <button onClick={routeToShop} className="pizza-button">
          Shop now!
        </button>
      </div>
    );
  }