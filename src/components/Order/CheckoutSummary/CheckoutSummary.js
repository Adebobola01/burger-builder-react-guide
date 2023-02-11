import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css"

const checkoutSummary = (props) => {

    const ingredients = {
        meat: 1,
        bacon: 2,
        cheese: 1,
        salad: 1,
    }

    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes good!</h1>
            <div>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger">Cancel</Button>
            <Button btnType="Success">Continue</Button>
        </div>
    )
}

export default checkoutSummary;