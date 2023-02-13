import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { redirect, Navigate, createSearchParams, Location } from "react-router-dom";
import { createBrowserHistory } from "history";


const INGREDIENT_PRICES = {
    bacon: 0.3,
    salad: 0.6,
    cheese: 0.8,
    meat: 1.3
}
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum, i) => {
            return sum + i;
        }, 0)
        this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount > 0 ? oldCount - 1 : oldCount;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
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
        //     ingredients: this.state.ingredients,
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
        true;
    }

    render() {
        const disabledIngredients = {
            ...this.state.ingredients
        }
        for (const key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} loading={this.state.loading} >
                    <OrderSummary ingredients={this.state.ingredients} purchaseContinue={this.purchaseContinueHandler} purchaseCancel={this.purchaseCancelHandler} price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients } />
                <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledIngredients } curPrice={this.state.totalPrice} purchaseable={this.state.purchaseable} ordered={this.purchasehandler} />
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);