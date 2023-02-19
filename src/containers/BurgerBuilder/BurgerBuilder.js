import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionType from "../../store/actions/actionTypes"
import {connect} from "react-redux";
// import { redirect, Navigate, createSearchParams, Location } from "react-router-dom";
// import { createBrowserHistory } from "history";

class BurgerBuilder extends Component{
    state = {
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum, i) => {
            return sum + i;
        }, 0);
        return sum > 0;
    }

    purchasehandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        // this.setState({loading: true})
        // const order = {
        //     ingredients: this.props.ings,
        //     price: this.state.totalPrice,
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

    render() {
        const disabledIngredients = {
            ...this.props.ings
        }
        for (const key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} loading={this.state.loading} >
                    <OrderSummary ingredients={this.props.ings} purchaseContinue={this.purchaseContinueHandler} purchaseCancel={this.purchaseCancelHandler} price={this.props.price} />
                </Modal>
                <Burger ingredients={this.props.ings } />
                <BuildControls ingredientAdded={this.props.onIngredientsAdded} ingredientRemoved={this.props.onIngredientsRemoved} disabled={disabledIngredients } curPrice={this.props.price} purchaseable={this.updatePurchaseState(this.props.ings)} ordered={this.purchasehandler} />
            </Aux>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientsRemoved: (ingName)=> dispatch({type: actionType.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));