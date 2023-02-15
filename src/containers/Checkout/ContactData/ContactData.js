import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css"
import Input from "../../../components/UI/Input/Input";
import { elementType } from "prop-types";

class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "your name"
                },
                value: ""
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                value: ""
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Email"
                },
                value: ""
            },
            Country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country"
                },
                value: ""
            },
            Zipcode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ZIP CODE"
                },
                value: ""
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        { vaue: "fastest", DisplayValue: "Fastest" },
                        {value: "cheapest", DisplayValue: "Cheapest"}
                    ]
                },
                value: ""
            },
        },
    }


    orderHandler = (e) => {
        e.preventDefault()
        console.log(this.props.ingredients);
    }

    render() {
        const formElementArr = [];
        for (let key in this.state.orderForm) {
            formElementArr.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        return (
            <div className="ContactData" >
                <h4>Enter your contact data</h4>
                <form>
                    {formElementArr.map(formEl => (
                        <Input elementType={formEl.config.elementType} elementConfig={formEl.config.elementConfig} value={formEl.config.value} key={formEl.id} />
                    ))}
                    <Button btnType="Success" clicked={this.orderHandler} > Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;