import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Routes } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { createBrowserHistory } from "history";
import withRouter from "../../hoc/withRouter";
import { connect } from "react-redux";

const history = createBrowserHistory();

const checkout = (props)=>{

    // componentDidUpdate() {
    //     console.log("updated")
    //     console.log(history.location)
    //     if (history.location.pathname !== "/checkout/contact-data") {
    //         return;
    //     }

    // }

    // componentDidMount() {
    //     const query = new URLSearchParams(window.location.search);
    //     const ingredients = {}
    //     for (let param of query.entries()) {
    //         ingredients[param[0]] = +param[1];
    //     }
    //     this.setState({ingredients: ingredients})
    // }

    const checkoutCancelHandler = async() => {
        return props.navigate("/")
    }

    const checkoutContinueHandler = async () => {
        return props.navigate("/checkout/contact-data")
    }
    

    return (
        <div>
            <CheckoutSummary ingredients={props.ings} cancel={checkoutCancelHandler} continue={checkoutContinueHandler} />
            <Routes>
                <Route path={history.location + "/contact-data"} element={<ContactData ingredients={props.ings} />} />
            </Routes>

            <ContactData ingredients={props.ings} /> 
        </div>
    )

}


const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}
export default connect(mapStateToProps)(withRouter(checkout));