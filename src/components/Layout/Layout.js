import React, {useState} from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css"
const layout = (props)=>{
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    // closeSideDrawer = () => {
    //     this.setState({showSideDrawer: false})
    // }

    // openSideDrawer = () => {
    //     this.setState({showSideDrawer: true})
    // }

    const toggleSideDrawer = () => {
        setShowSideDrawer(!showSideDrawer)
    }

    return (
        <Aux>
            <Toolbar clicked={toggleSideDrawer} />
            <SideDrawer click={ toggleSideDrawer } open={showSideDrawer} />
            <main className="Content">{props.children}</main>
        </Aux>
    )
}

export default layout;