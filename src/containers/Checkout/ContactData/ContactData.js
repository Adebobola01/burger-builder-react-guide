import React, {useState} from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css"
import Input from "../../../components/UI/Input/Input";

const contactData = (props)=>{
    const [orderForm, setOrderForm] = useState({
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
    })

    const inputChangeHandler = (e, inputIdentifier) => {
        const updatedOrderForm = { ...orderForm };
        const updatedFormEl = updatedOrderForm[inputIdentifier];
        updatedFormEl.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormEl;
        setOrderForm({ orderForm: updatedOrderForm });
    }

    const orderHandler = (e) => {
        e.preventDefault()
        const formData = {}
        for (let formInputId in orderForm) {
            formData[formInputId] = orderForm[formInputId].value;
        }
        const order = {
            ingredients: props.ingredients,
            orderForm:formData
        }

        console.log(order)
    }
        const formElementArr = [];
        for (let key in orderForm) {
            formElementArr.push({
                id: key,
                config: orderForm[key]
            })
        }


        return (
            <div className="ContactData" >
                <h4>Enter your contact data</h4>
                <form onSubmit={orderHandler} >
                    {formElementArr.map(formEl => (
                        <Input changed={(e)=> inputChangeHandler(e, formEl.id)} elementType={formEl.config.elementType} elementConfig={formEl.config.elementConfig} value={formEl.config.value} key={formEl.id} />
                    ))}
                    <Button btnType="Success" > Order</Button>
                </form>
            </div>
        )
}

export default contactData;