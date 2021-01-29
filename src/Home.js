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
          src="https://images.pexels.com/photos/3944308/pexels-photo-3944308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Picture of Pizza"
        />
        <button onClick={routeToShop} className="pizza-button">
          CLICK TO ORDER!
        </button>
        <div className="home-line"></div>
      </div>
    );
  }