import React from "react";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const orderSummary = (props) => {
    const navigate = useNavigate()
    const redirect = () => {
        return navigate({
            pathname: "/checkout",
        });
    }
    const ingredientSummary = Object.keys(props.ings).map(ingKey => (
        <li key={ingKey} >
            <span style={{textTransform: "capitalize"}} >{ingKey}:</span> { props.ings[ingKey]}
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


const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect(mapStateToProps)(orderSummary);