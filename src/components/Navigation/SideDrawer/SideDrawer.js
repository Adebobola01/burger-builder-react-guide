import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary"

const sideDrawer = (props) => {



    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.click} />
            <div className={`SideDrawer  ${props.open ? "open" : "close"}`} > 
                <Logo height="11%" />
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
};

export default sideDrawer;