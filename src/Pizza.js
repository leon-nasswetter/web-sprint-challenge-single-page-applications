import userEvent from "@testing-library/user-event";
import React from "react";

export default function Pizza(props) {

    const {
        values,
        submit,
        change,
        errors,
      } = props

    const onSubmit = evt => {
    evt.preventDefault()
    submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
      }

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

            <form className="pizza-form" onSubmit={onSubmit}> 
            {/* SIZE----------------------------------------- */}
                <div className="subcategory-header">
                    <h3>Choice of Size</h3>
                    <p className="headerP">Required</p>
                </div>
                <select name="size" value={values.size} onChange={onChange}>
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
                            checked={values.sauce === "originalRed"}
                            onChange={onChange}
                            />
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type="radio"
                            name="sauce"
                            value="garlicRanch"
                            checked={values.sauce === "garlicRanch"}
                            onChange={onChange}
                            />
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type="radio"
                            name="sauce"
                            value="bbqSauce"
                            checked={values.sauce === "bbqSauce"}
                            onChange={onChange}
                            />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type="radio"
                            name="sauce"
                            value="spinachAlfredo"
                            checked={values.sauce === "spinachAlfredo"}
                            onChange={onChange}
                            />
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
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input 
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input 
                        type="checkbox"
                        name="canadianBacon"
                        checked={values.canadianBacon}
                        onChange={onChange}
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input 
                        type="checkbox"
                        name="spicyItalianSausage"
                        checked={values.spicyItalianSausage}
                        onChange={onChange}
                        />
                    </label>
                    <label>Grilled Chicken
                        <input 
                        type="checkbox"
                        name="grilledChicken"
                        checked={values.grilledChicken}
                        onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input 
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                        />
                    </label>
                    <label>Green Pepper
                        <input 
                        type="checkbox"
                        name="greenPepper"
                        checked={values.greenPepper}
                        onChange={onChange}
                        />
                    </label>
                    <label>Diced Tomato's
                        <input 
                        type="checkbox"
                        name="dicedTomatos"
                        checked={values.dicedTomatos}
                        onChange={onChange}
                        />
                    </label>
                    <label>Black Olives
                        <input 
                        type="checkbox"
                        name="blackOlives"
                        checked={values.blackOlives}
                        onChange={onChange}
                        />
                    </label>
                    <label>Artichoke Hearts
                        <input 
                        type="checkbox"
                        name="artichokeHearts"
                        checked={values.artichokeHearts}
                        onChange={onChange}
                        />
                    </label>
                    <label>Three Cheese
                        <input 
                        type="checkbox"
                        name="threeCheese"
                        checked={values.threeCheese}
                        onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                        />
                    </label>
                    <label>Extra Cheese
                        <input 
                        type="checkbox"
                        name="extraCheese"
                        checked={values.extraCheese}
                        onChange={onChange}
                        />
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
                    value={values.special}
                    onChange={onChange}
                    placeholder="Anything else you'd like to add?"
                />
                <div className="lineDiv"></div>
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Your Name Here"
                />
                <div className="orderButton">
                    <button>Add to Order</button>
                </div>
                {/* ERROR RENDER---------------------------------- */}
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                </div>
            </form>

        </div>
    );
}