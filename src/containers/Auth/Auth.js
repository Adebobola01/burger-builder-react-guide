import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner"
import "./Auth.css"
// import resolve from "resolve";
// import { reject } from "lodash";
class Auth extends Component {

    state = {
        controls: {
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
        auth: {
            token: "",
            exp: "34"
        },
        loading: false
    }
    inputChangeHandler = (e, inputIdentifier) => {
        const updatedAuthForm = { ...this.state.controls };
        const updatedFormEl = updatedAuthForm[inputIdentifier];
        updatedFormEl.value = e.target.value;
        updatedAuthForm[inputIdentifier] = updatedFormEl;
        this.setState({ controls: updatedAuthForm });
    }

    submitHandler = async(e) => {
        e.preventDefault();
        this.setState({loading: true})
        const data = await new Promise((resolve, reject) => {       
            setTimeout(() => {
                const data = {
                    idToken: "lkafdlksjflkajflkjaflk;flkas",
                }
                this.setState({loading: false})
                resolve(data)
            }, 3000)
        })
        this.setState((prevState) => {
            return {
                auth: {
                    ...prevState.auth,
                    token: data.idToken
                }
            }
        })
        console.log(this.state)
    }

    render() {

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
}

export default Auth;