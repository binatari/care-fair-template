import axios from "axios";
import { useMutation, useQuery } from "react-query";


export const subscribe = (data) => {
    return axios.patch('https://idonatio-api.herokuapp.com/api/v1/donees/onboard', data, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const register = (data) => {
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/donees', data)
}


export const login = (data) => {
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/auth/login', data)
}


export const verify = ({token, otp}) => {
    return axios.post('https://idonatio-api.herokuapp.com/api/v1/auth/verify/email', {otp}, {
        headers: { Authorization: `Bearer ${token}` }
    })
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
