import React from "react";
import "./Toolbar.css"
import Logo from "../../Logo/Logo";
import NavItems from "../NavigationItems/NavigationItems"
const toolbar = (props) => (
    <header className="Toolbar" >
        <div>menu</div>
        <Logo/>
        <NavItems/>
    </header>
)

export default toolbar;