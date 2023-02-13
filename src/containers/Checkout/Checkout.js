import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useNavigate, Route, Routes } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

const checkout = (props) => {
    const navigate = useNavigate();

    const state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    const query = new URLSearchParams(window.location.search);
    for (let param of query.entries()) {
        state.ingredients[param[0]] = +param[1];
    }

    console.log(state)

    const checkoutCancelHandler = () => {
        return navigate("/")
    }

    const checkoutContinueHandler = () => {
        return navigate("/checkout/contact-data")
    }

    return (
        <div>
            <CheckoutSummary ingredients={state.ingredients} cancel={checkoutCancelHandler} continue={checkoutContinueHandler} />
            {/* <ContactData/> */}
            <Routes>
                <Route path={history.location + "/contact-data"} element={<ContactData/>} />
            </Routes>
        </div>
    )
}

export default checkout;