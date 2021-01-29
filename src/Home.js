import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
  
    const routeToShop = () => {
      history.push("/pizza");
    };
  
    return (
      <div className="home-wrapper">
        <img
          className="home-image"
          src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Picture of Pizza"
        />
        <button onClick={routeToShop} className="pizza-button">
          Pizza!
        </button>
      </div>
    );
  }