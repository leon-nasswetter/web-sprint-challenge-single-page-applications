import React from "react";

export default function Order(props) {

    const { values } = props
    console.log(values)

    const newOrder = {
        toppings: ["pepperoni", "sausage", "canadianBacon", "spicyItalianSausage", "grilledChicken", "onions", "greenPepper", "dicedTomatos", "blackOlives", "artichokeHearts", "threeCheese", "pineapple", "extraCheese"].filter(
        (topping) => values[topping]
      ),
    }
console.log(newOrder.toppings)
    return(
        <div className="pizzaOrderWrapper">
            <div className="pizzaCard">
                <h2>Thank you for you order {values.name} !</h2>
                <h4>Order Details</h4>
                <p>Size: {values.size}</p>
                <p>Sauce: {values.sauce}</p>
                    
                <p>Toppings: {newOrder.toppings.join(", ")}</p>

                <p>Special Instructions: {values.special}</p>
            </div>
        </div>
        
    )
}