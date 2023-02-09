import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css"
class Layout extends Component{

    state = {
        showSideDrawer: false, 
    }

    // closeSideDrawer = () => {
    //     this.setState({showSideDrawer: false})
    // }

    // openSideDrawer = () => {
    //     this.setState({showSideDrawer: true})
    // }

    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar clicked={this.toggleSideDrawer} />
                <SideDrawer click={ this.toggleSideDrawer } open={this.state.showSideDrawer} />
                <main className="Content">{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;