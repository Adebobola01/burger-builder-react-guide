import React, {Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Routes } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { createBrowserHistory } from "history";
import withRouter from "../../hoc/withRouter";
import { connect } from "react-redux";

const history = createBrowserHistory();

class Checkout extends Component {

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

    checkoutCancelHandler = async() => {
        return this.props.navigate("/")
    }

    checkoutContinueHandler = async () => {
        return this.props.navigate("/checkout/contact-data")
    }
    

    render(){

        return (
            <div>
                <CheckoutSummary ingredients={this.props.ings} cancel={this.checkoutCancelHandler} continue={this.checkoutContinueHandler} />
                <Routes>
                    <Route path={history.location + "/contact-data"} element={<ContactData ingredients={this.props.ings} />} />
                </Routes>

                <ContactData ingredients={this.props.ings} /> 
            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}
export default connect(mapStateToProps)(withRouter(Checkout));