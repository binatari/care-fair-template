import axios from "axios";
import { useMutation, useQuery } from "react-query";

export const api = axios.create({
    baseURL:'https://idonatio-api.herokuapp.com/api/v1'
})


export const subscribe = ({finalResponse, token}) => {
    console.log(finalResponse, token)
    return api.patch('/donees/onboard', {...finalResponse, country_id:'bf82fef9-1dfb-4a0f-8132-2c74801d39ee'}, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const getDonations = (token) => {
    return api.get('/donations', {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const getDonationsSummary = (token) => {
    return api.get('/donations/summary', {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const register = (data) => {
    return api.post('/donees', data)
}


export const getUser = (data) => {
    return api.get('/auth/user', {
        headers: { Authorization: `Bearer ${data}` }
    })
}


export const login = (data) => {
    return api.post('/auth/login', data)
}


export const verify = ({token, form}) => {
    console.log(token, form)
    return api.post('/auth/verify/email', {otp:form}, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const sendOtp= (data) => {
    console.log(data)
    return api.post('/auth/password/forgot', data)
}


export const checkOtp= (data) => {
    return api.patch('/auth/password/validate-otp', data)
}

export const getDonationTypes = (token) => {
    return api.get('/donation-types', {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const getDonationType = (token, id) => {
    return api.get(`/donation-types/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

//donations page
export const onGetDonations = (token) =>{
    return useQuery('getDonations', ()=>getDonations(token))
}

export const onGetDonationsSummary = (token) =>{
    return useQuery('getDonationsSummary', ()=>getDonationsSummary(token))
}

//donations types page
export const onGetDonationTypes = (token) =>{
    return useQuery('getDonationTypes', ()=>getDonationTypes(token))
}


export const onGetDonationType = (token, id) =>{
    return useQuery('getDonationType', ()=>getDonationType(token, id))
}


export const onGetUser = (token) =>{
    return useQuery('getUser', ()=>getUser(token))
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



