import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css"
import Input from "../../../components/UI/Input/Input";

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

    inputChangeHandler = (e, inputIdentifier) => {
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedFormEl = updatedOrderForm[inputIdentifier];
        updatedFormEl.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormEl;
        this.setState({ orderForm: updatedOrderForm });
    }

    orderHandler = (e) => {
        e.preventDefault()
        const formData = {}
        for (let formInputId in this.state.orderForm) {
            formData[formInputId] = this.state.orderForm[formInputId].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            orderForm:formData
        }

        console.log(order)
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
                <form onSubmit={this.orderHandler} >
                    {formElementArr.map(formEl => (
                        <Input changed={(e)=> this.inputChangeHandler(e, formEl.id)} elementType={formEl.config.elementType} elementConfig={formEl.config.elementConfig} value={formEl.config.value} key={formEl.id} />
                    ))}
                    <Button btnType="Success" > Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;