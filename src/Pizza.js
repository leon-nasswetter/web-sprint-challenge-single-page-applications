import userEvent from "@testing-library/user-event";
import React from "react";

export default function Pizza(props) {

    return(
        <div className="pizza-wrapper">
            <div>
                <h2 className="buildPizzaHeader">Build Your Own Pizza</h2>
            </div>
            <img 
                className="pizza-image"
                src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Picture of Pizzas"
            />
            <div className="build-pizza">
                <h2>Build your Own Pizza</h2>
            </div>

            <form className="pizza-form"> 
            {/* SIZE----------------------------------------- */}
                <div className="subcategory-header">
                    <h3>Choice of Size</h3>
                    <p className="headerP">Required</p>
                </div>
                <select name="size-choices">
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                {/* END OF SIZE------------------------------ */}
                {/* SAUCES----------------------------------- */}
                <div className="subcategory-header">
                    <h3>Choice of Sauce</h3>
                    <p className="headerP">Required</p>
                </div>
                <div className="sauce-choices">
                    <label>Original Red
                        <input 
                            type="radio"
                            name="sauce"
                            value="originalRed"
                            checked={false}/>
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type="radio"
                            name="sauce"
                            value="garlicRanch"
                            checked={false}/>
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type="radio"
                            name="sauce"
                            value="bbqSauce"
                            checked={false}/>
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type="radio"
                            name="sauce"
                            value="spinachAlfredo"
                            checked={false}/>
                    </label>
                </div>
                {/* END OF SAUCES---------------------------- */}
                {/* TOPPINGS--------------------------------- */}
                <div className="subcategory-header">
                    <h3>Add Toppings</h3>
                    <p className="headerP">Choose up to 10</p>
                </div>
                <div className="topping-choices">
                    <label>Pepperoni
                        <input 
                        type="checkbox"
                        name="pepperoni"
                        checked={null}/>
                    </label>
                    <label>sausage
                        <input 
                        type="checkbox"
                        name="sausage"
                        checked={null}/>
                    </label>
                    <label>Canadian Bacon
                        <input 
                        type="checkbox"
                        name="canadianBacon"
                        checked={null}/>
                    </label>
                    <label>Spicy Italian Sausage
                        <input 
                        type="checkbox"
                        name="spicyItalianSausage"
                        checked={null}/>
                    </label>
                    <label>Grilled Chicken
                        <input 
                        type="checkbox"
                        name="grilledChicken"
                        checked={null}/>
                    </label>
                    <label>Onions
                        <input 
                        type="checkbox"
                        name="onions"
                        checked={null}/>
                    </label>
                    <label>Green Pepper
                        <input 
                        type="checkbox"
                        name="greenPepper"
                        checked={null}/>
                    </label>
                    <label>Diced Tomato's
                        <input 
                        type="checkbox"
                        name="dicedTomatos"
                        checked={null}/>
                    </label>
                    <label>Black Olives
                        <input 
                        type="checkbox"
                        name="blackOlives"
                        checked={null}/>
                    </label>
                    <label>Artichoke Hearts
                        <input 
                        type="checkbox"
                        name="artichokeHearts"
                        checked={null}/>
                    </label>
                    <label>Three Cheese
                        <input 
                        type="checkbox"
                        name="threeCheese"
                        checked={null}/>
                    </label>
                    <label>Pineapple
                        <input 
                        type="checkbox"
                        name="pineapple"
                        checked={null}/>
                    </label>
                    <label>Extra Cheese
                        <input 
                        type="checkbox"
                        name="extraCheese"
                        checked={null}/>
                    </label>
                </div>
                {/* END OF TOPPINGS JESUSSS | do this more dry? --- */}
                {/* SPECIAL INSTRUCTIONS--------------------------- */}
                <div className="subcategory-header">
                    <h3>Special Instructions</h3>
                </div>
                <input 
                    type="text"
                    name="special"
                    placeholder="Anything else you'd like to add?"
                />
                <div className="lineDiv"></div>
                <div className="orderButton">
                    <button>Add to Order</button>
                </div>
            </form>

        </div>
    );
}