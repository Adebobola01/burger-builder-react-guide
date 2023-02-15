import React from "react";
import "./Input.css"
const input = (props) => {
    let inputEl = null;
    switch (props.elementType) {
        case "input":
            inputEl = <input onChange={props.changed} className="InputEl" {...props.elementConfig} value={props.value} />
            break;
        case "textarea":
            inputEl = <textarea onChange={props.changed}  className="InputEl" {...props.elementConfig} value={props.value} />
            break
        case "select":
            inputEl = (<select onChange={props.changed} className="InputEl" value={props.value} >
                {props.elementConfig.options.map(option => (
                    <option value={option.value} key={option.DisplayValue} > {option.DisplayValue} </option>
                ))}
            </select>)
            break;
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