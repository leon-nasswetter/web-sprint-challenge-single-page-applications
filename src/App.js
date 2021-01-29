import React from "react";
import { Route, Link, Switch} from "react-router-dom";
import Home from "./Home";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div className="App">

      <nav>
        <h1 className="store-header">LAMBDA EATS</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#">Help</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <Pizza />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
