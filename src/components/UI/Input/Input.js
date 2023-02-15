import React from "react";
import "./Input.css"
const input = (props) => {
    let inputEl = null;
    switch (props.elementType) {
        case "input":
            inputEl = <input className="InputEl" {...props.elementConfig} value={props.value} />
            break;
        case "textarea":
            inputEl = <textarea className="InputEl" {...props.elementConfig} value={props.value} />
            break
        default: 
            inputEl = <input className="InputEl" {...props.elementConfig} value={props.value} />
            break;
    }
    
    return (
        <div className="Input" >
            <label className="Label" >{props.label}</label>
            {inputEl}
        </div>
    )
}

export default input;