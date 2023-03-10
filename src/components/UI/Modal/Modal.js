import React from "react";
import "./Modal.css"
import Aux from "../../../hoc/Auxiliary"
import Backdrop from "../Backdrop/Backdrop";
import Spinner from "../Spinner/Spinner";
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal" style={{transform: props.show ? "translateY(0)" : "translateY(-100vh)"}} >
            { props.loading ? <Spinner /> : props.children }
        </div>
    </Aux>
)

export default modal;