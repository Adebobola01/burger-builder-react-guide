import React, { useEffect, useState } from "react";
import Aux from "../Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState;

        const reqInterceptors = axios.interceptors.request.use(res => res, error => {
            setError(null);
            return req;
        })
        const resInterceptors = axios.interceptors.response.use(res => res, error => {
            this.setState({error: error.message})
        })
        
        useEffect(() => {
            axios.interceptors.request.eject(reqInterceptors);
            axios.interceptors.response.eject(resInterceptors);
        }, [reqInterceptors, resInterceptors])

        const errorConfirmedHandler = ()=> {
            setError(null);
        }
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