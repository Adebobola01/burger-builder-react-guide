import React, { useState } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionType from "../../store/actions/index"
import {connect} from "react-redux";
// import { redirect, Navigate, createSearchParams, Location } from "react-router-dom";
// import { createBrowserHistory } from "history";

const burgerBuilder = props => {
    const [purchaseable, setPurchaseable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);
    const [loading, setLoading] = useState(false);

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum, i) => {
            return sum + i;
        }, 0);
        return sum > 0;
    }

    const purchasehandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        // this.setState({loading: true})
        // const order = {
        //     ingredients: this.props.ings,
        //     price: totalPrice,
        //     customer: {
        //         name: "Adebobola",
        //         address: {
        //             street: "Oke ola",
        //             state: "Osun",
        //             country: "Nigeria"
        //         },
        //         email: "adebobolamuhydeen@gmail.com",
        //     },
        //     deliverymethod: "fastest"
        // }
        // axios.post("/orders.json", order).then(response => {
        //     this.setState({loading: false, purchasing: false})
        //     console.log(response)
        // }).catch(err => {
        //     this.setState({loading: false, purchasing: false})
            
        // })

        // return <Link to="/checkout"/>
        return true;
    }

    const disabledIngredients = {
        ...props.ings
    }
    for (const key in disabledIngredients) {
        disabledIngredients[key] = disabledIngredients[key] <= 0
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler} loading={loading} >
                <OrderSummary ingredients={props.ings} purchaseContinue={purchaseContinueHandler} purchaseCancel={purchaseCancelHandler} price={props.price} />
            </Modal>
            <Burger ingredients={props.ings } />
            <BuildControls ingredientAdded={props.onIngredientsAdded} ingredientRemoved={props.onIngredientsRemoved} disabled={disabledIngredients } curPrice={props.price} purchaseable={updatePurchaseState(props.ings)} ordered={purchasehandler} />
        </Aux>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => dispatch(actionType.addIngredient(ingName)),
        onIngredientsRemoved: (ingName)=> dispatch(actionType.removeIngredient(ingName))
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));