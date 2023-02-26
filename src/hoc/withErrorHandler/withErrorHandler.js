import React from "react";
import Aux from "../Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import useHttp from "../../hooks/useHttp";

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, errorConfirmedHandler] = useHttp(axios);
        return (
            <Aux>
                <Modal show={error} modalClosed={errorConfirmedHandler} >
                    { error ? error.message : ""}
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        )
    }
}

export default withErrorHandler;