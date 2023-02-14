import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css"

class ContactData extends Component{
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        }
    }


    orderHandler = (e) => {
        e.preventDefault()
        console.log(this.props.ingredients);
    }

    render() {
        return (
            <div className="ContactData" >
                <h4>Enter your contact data</h4>
                <form>
                    <input name="name" placeholder="Enter your Name" type="text" />
                    <input name="email" placeholder="Enter your Email" type="email" />
                    <input name="street" placeholder="Enter your Street" type="text" />
                    <input name="postal" placeholder="Enter your Postal" type="text" />
                    <Button btnType="Success" clicked={this.orderHandler} > Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;