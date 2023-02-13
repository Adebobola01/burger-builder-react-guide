import React, {useEffect} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useNavigate } from "react-router-dom";


const checkout = (props) => {
    const navigate = useNavigate();
    let ingredients = {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    }

    const query = new URLSearchParams(window.location.search);
    for (let param of query.entries()) {
        ingredients[param[0]] = +param[1];
    }
    console.log(ingredients)



    const checkoutCancelHandler = () => {
        return navigate("/")
    }

    const checkoutContinueHandler = () => {
        return navigate("/checkout/contact-data")
    }
    console.log("here2")

    return (
        <CheckoutSummary ingredients={ingredients} cancel={checkoutCancelHandler}  continue={checkoutContinueHandler} />
    )
}

export default checkout;