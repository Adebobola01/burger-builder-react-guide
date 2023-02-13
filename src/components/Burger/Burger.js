import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css"
// import {withRouter} from "react-router-dom"
const burger = (props) => {

    let modIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredients type={ingKey} key={ ingKey + i} />
        }) 
    }).reduce((arr, el) => {
       return arr.concat(el) 
    }, [])
    if (modIngredients.length === 0) {
        modIngredients = <p>Please start adding ingredients</p>
    }

    console.log(modIngredients)

    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top" />
            {modIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger;