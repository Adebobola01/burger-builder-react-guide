import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css"
class Layout extends Component{

    state = {
        showSideDrawer: true, 
    }

    closeSideDrawer = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer click={ this.closeSideDrawer } open={this.state.showSideDrawer} />
                <main className="Content">{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;