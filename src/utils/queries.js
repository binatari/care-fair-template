import axios from "axios";
import { useMutation, useQuery } from "react-query";


export const subscribe = ({finalResponse, token}) => {
    console.log(finalResponse, token)
    return axios.patch('https://idonatio-api.herokuapp.com/api/v1/donees/onboard', {...finalResponse, country_id:'bf82fef9-1dfb-4a0f-8132-2c74801d39ee'}, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const register = (data) => {
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/donees', data)
}


export const login = (data) => {
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/auth/login', data)
}


export const verify = ({token, form}) => {
    console.log(token, form)
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/auth/verify/email', {otp:form}, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const sendOtp= (data) => {
    console.log(data)
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/auth/password/forgot', data)
}


export const checkOtp= (data) => {
    return axios.patch('https://idonatio-api.herokuapp.com/api/v1/auth/password/validate-otp', data)
}



export const onBoard = () =>{
    return useMutation(subscribe)
}

export const onRegister = () =>{
    return useMutation(register)
}


export const onLogin = () =>{
    return useMutation(login)
}

export const onVerify = () =>{
    return useMutation(verify)
}

export const requestOtp = () =>{
    return useMutation(sendOtp)
}

export const validateOtp = () =>{
    return useMutation(checkOtp)
}
