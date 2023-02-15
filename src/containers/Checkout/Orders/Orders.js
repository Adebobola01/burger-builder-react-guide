import React, { Component } from "react";
import Order from "../../../components/Order/Order/Order";
// import "./Orders.csss"

class Orders extends Component{
    render() {
        return (
            <div>

                <Order />
                <Order/>
            </div>
        )
    }
}

export default Orders;