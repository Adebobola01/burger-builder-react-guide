import React from "react";
import Button from "../../UI/Button/Button";
import { useNavigate, createSearchParams } from "react-router-dom";


const orderSummary = (props) => {
    const navigate = useNavigate()
    const params = {...props.ingredients};
    const redirect = () => {
        return navigate({
            pathname: "/checkout",
            search: `?${createSearchParams(params)}`
        });
    }
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
            <Button btnType="Success" clicked={redirect} >Success</Button>
        </div>
    )
}

export default orderSummary;