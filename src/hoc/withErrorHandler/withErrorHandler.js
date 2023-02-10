import React, { Component } from "react";
import Aux from "../Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state={
            // error: null
        }

        componentDidMount() {
            axios.interceptors.response.use(req => {
                this.setState({ error: null });
                return req;
            }, error => {
                this.setState({error: error.message})
            })
            axios.interceptors.request.use(res => res, error => {
                this.setState({error: error})
            })
        }
        
        errorConfirmedHandler = ()=> {
            this.setState({error: null})
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler} >
                        { this.state.error ? this.state.error.message : ""}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}

export default withErrorHandler;