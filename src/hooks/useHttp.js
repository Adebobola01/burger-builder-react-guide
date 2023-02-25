import {useState, useEffect } from "react";

export default httpClient => {
    const [error, setError] = useState(null);

    const reqInterceptors = httpClient.interceptors.request.use(req => req, error => {
        setError(null);
        // return req;
    })
    const resInterceptors = httpClient.interceptors.response.use(res => res, error => {
        setError(error.message)
    })
    
    useEffect(() => {
        httpClient.interceptors.request.eject(reqInterceptors);
        httpClient.interceptors.response.eject(resInterceptors);
    }, [reqInterceptors, resInterceptors])

    const errorConfirmedHandler = ()=> {
        setError(null);
    }

    return [error, errorConfirmedHandler];
}