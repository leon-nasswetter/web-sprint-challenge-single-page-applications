import React, { useState, useEffect } from "react";
import { Route, Link, Switch} from "react-router-dom";
import Home from "./Home";
import Pizza from "./Pizza";
import YupSchema from "./validation/formSchema";
import * as yup from "yup";
import Order from "./Order";


const initialOrder = {
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatos: false,
  blackOlives: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  special: "",
  name: "",
 }
 const initialFormErrors = {
  size: "",
  sauce: "",
  name: "",
  
}

const initialOrderHistory = []

const App = () => {

const [order, setOrder] = useState(initialOrder)
const [orderHistory, setOrderHistory] = useState(initialOrderHistory)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const inputChange = (name, value) => {
  yup
  .reach(YupSchema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0],
    })
  })

  setOrder({
    ...order,
    [name]: value 
  })
}

const submitForm = () => {
  const newOrder = {
    size: order.size,
    sauce: order.sauce,
    special: order.special.trim(),
    name: order.name.trim(),
    toppings: ["pepperoni", "sausage", "canadianBacon", "spicyItalianSausage", "grilledChicken", "onions", "greenPepper", "dicedTomatos", "blackOlives", "artichokeHearts", "threeCheese", "pineapple", "extraCheese"].filter(
      (topping) => order[topping]
    ),
      
  }
  if(!newOrder.name || !newOrder.sauce || !newOrder.size)
    return;
  setOrderHistory([newOrder, ...orderHistory])
  console.log("new order", newOrder)
  // setOrder(initialOrder)
}



  return (
    <div className="App">

      <nav>
        <h1 className="store-header">LAMBDA EATS</h1>
        <div className="nav-links">
          <Link className="nav-button" to="/">Home</Link>
          <Link className="nav-button" to="#">Help</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <Pizza 
            values={order}
            change={inputChange}
            errors={formErrors}
            submit={submitForm}
          />
        </Route>
        <Route path="/order">
            <Order values={order}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
