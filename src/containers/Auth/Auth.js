import React, { useState, useEffect } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner"
import "./Auth.css"
// import resolve from "resolve";
// import { reject } from "lodash";
const auth = props => {

    const [authForm, setAuthForm] = useState(
        {
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
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
        },
    )
    const [auth, setAuth] = useState(
        {
            token: "",
            exp: "34"
        },
    )
    const [loading, setLoading] = useState(false);

    const inputChangeHandler = (e, inputIdentifier) => {
        const updatedAuthForm = { ...authForm };
        const updatedFormEl = updatedAuthForm[inputIdentifier];
        updatedFormEl.value = e.target.value;
        updatedAuthForm[inputIdentifier] = updatedFormEl;
        setAuthForm(updatedAuthForm)
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        setLoading(true);
        const data = await new Promise((resolve, reject) => {       
            setTimeout(() => {
                const data = {
                    idToken: "lkafdlksjflkajflkjaflk;flkas",
                }
                setLoading(false);
                resolve(data)
            }, 3000)
        })
        setAuth((prevState) => (
            {
                ...prevState.auth,
                token: data.idToken
            }
        ))
    }


        const formEl = Object.keys(this.state.controls).map(key => {
            return {
                ...this.state.controls[key],
                key: key
            }
        })

        let form = (
            formEl.map((el, i) => (
                <Input key={i} elementType={el.elementType} elementConfig={el.elementConfig} changed={(e) => this.inputChangeHandler(e, el.key)} />
            ))
        )
            
            
        return (
            <div>
                <form className="AuthData" onSubmit={this.submitHandler} >
                    {this.state.loading ? <Spinner /> :
                        form
                    }
                    <Button btnType="Success">Submit</Button>

                </form>
            </div>
        )
}

export default auth;