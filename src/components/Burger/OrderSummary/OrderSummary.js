import React from "react";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => (
        <li>
            <span>{ingKey}: { props.ingredients[ingKey]}</span>
        </li>
    ))
    return (
        <div>
            <h3>Your order ingredients are listed below</h3>
            <ul>
                {ingredientSummary}
            </ul>
        </div>
    )
}

export default orderSummary;