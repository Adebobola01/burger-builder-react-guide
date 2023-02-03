import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import "./Burger.css"
const burger = (props) => {

    const modIngredients = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_, i) => {
            return <BurgerIngredients type={ingKey} key={ ingKey + i} />
        }) 
    })

    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top" />
            {modIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default burger;