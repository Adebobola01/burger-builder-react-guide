import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import "./Auth.css"
class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "your email"
                },
                value: ""
            },
            password: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "enter your password"
                },
                value: ""
            }
        }
    }

    render() {

        const formEl = Object.keys(this.state.controls).map(key => {
            return this.state.controls[key]
        })
        console.log(formEl)
        
        
        return (
            <div>
                <form className="AuthData" >
                    {formEl.map((el, i) => (
                        <Input key={i} elementType={el.elementType} elementConfig={el.elementConfig} />
                    ))}
                    <Button btnType="Success">Submit</Button>
                </form>
            </div>
        )
    }
}

export default Auth;