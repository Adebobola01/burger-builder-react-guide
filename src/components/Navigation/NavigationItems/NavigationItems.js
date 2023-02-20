import React from "react";
import "./NavigationItems.css";
import NavItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className="NavigationItems" >
        <NavItem link="/" >Burger Builder</NavItem>
        <NavItem link="/orders" >Orders</NavItem>
        <NavItem link="/auth" >Auth</NavItem>
    </ul>
);

export default navigationItems;