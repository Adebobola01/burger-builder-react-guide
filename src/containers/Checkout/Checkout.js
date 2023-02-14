import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Routes } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { createBrowserHistory } from "history";
import withRouter from "../../hoc/withRouter";


const history = createBrowserHistory();

class Checkout extends Component {

    state = {
        contact: null,
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    };


    // componentDidUpdate() {
    //     console.log("updated")
    //     console.log(history.location)
    //     if (history.location.pathname !== "/checkout/contact-data") {
    //         return;
    //     }

    // }

    componentDidMount() {
        const query = new URLSearchParams(window.location.search);
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients})
    }

    checkoutCancelHandler = async() => {
        return this.props.navigate("/")
    }

    checkoutContinueHandler = async () => {
        return this.props.navigate("/checkout/contact-data")
    }
    

    render(){

        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} cancel={this.checkoutCancelHandler} continue={this.checkoutContinueHandler} />
                <Routes>
                    <Route path={history.location + "/contact-data"} element={<ContactData ingredients={this.state.ingredients} />} />
                </Routes>

                <ContactData ingredients={this.state.ingredients} /> 
            </div>
        )
    }

}

export default withRouter(Checkout);