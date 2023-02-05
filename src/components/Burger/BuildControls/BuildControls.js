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
        {controls.map((ctrl, i) => (
            <BuildControl key={ctrl + i} type={ctrl.type} add={()=> props.ingredientAdded(ctrl.type)} label={ctrl.label} remove={()=> props.ingredientRemoved(ctrl.type)} disable={props.disabled[ctrl.type]} />
        ))}
    </div>
)

export default buildControls;