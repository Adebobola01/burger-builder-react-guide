import React from "react"
import BuildControl from "./BuildControl/BuildControl"
import "./BuildControls.css";
const controls = [
    { label: "Cheese", type: "cheese"},
    { label: "Salad", type: "salad"},
    {label: "Meat", type: "meat"},
    {label: "Bacon", type: "bacon"}
]

const buildControls = (props) => (
    <div className="BuildControls" >
        <p>Current Price: {props.curPrice.toFixed(2)}</p>
        {controls.map((ctrl, i) => (
            <BuildControl key={ctrl + i} type={ctrl.type} add={()=> props.ingredientAdded(ctrl.type)} label={ctrl.label} remove={()=> props.ingredientRemoved(ctrl.type)} disable={props.disabled[ctrl.type]} />
        ))}
        <button className="OrderButton" disabled={!props.purchaseable} onClick={props.ordered} >Order Now</button>
    </div>
)

export default buildControls;