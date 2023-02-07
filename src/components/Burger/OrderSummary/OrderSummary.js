import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => (
        <li key={ingKey} >
            <span style={{textTransform: "capitalize"}} >{ingKey}:</span> { props.ingredients[ingKey]}
        </li>
    ))
    return (
        <div>
            <h3>Your order ingredients are listed below</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2) }</strong></p>
            <p>continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel} >Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue} >Success</Button>
        </div>
    )
}

export default orderSummary;