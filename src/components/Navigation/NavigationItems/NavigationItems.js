import React from "react";
import "./NavigationItems.css";
import NavItem from "./NavigationItem/NavigationItem"

const navigationItems = (props) => (
    <ul className="NavigationItems" >
        <NavItem active link="/" >Burger Builder</NavItem>
        <NavItem link="/" >Checkout</NavItem>

    </ul>
);

export default navigationItems;