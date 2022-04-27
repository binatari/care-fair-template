import axios from "axios";
import authHeader from "./services";
import { useMutation, useQuery } from "react-query";

export const api = axios.create({
    baseURL:'https://api.thecarefair.com/api/v1/',
    headers:{
        'Content-Type':'application/json',
        accept:'application/json'
    }
})

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});


export const subscribe = ({finalResponse, token}) => {
    console.log(finalResponse, token)
    return api.patch('/donees/onboard', {...finalResponse, country_id:'bf82fef9-1dfb-4a0f-8132-2c74801d39ee'},)
}

export const getDonations = () => {
    return api.get('/donations',)
}

export const getDonationsSummary = () => {
    return api.get('/donations/summary',)
}

export const register = (data) => {
    return api.post('/donees', data)
}


export const getUser = (data) => {
    return api.get('/auth/user')
}


export const login = (data) => {
    return api.post('/admin/auth/login', {...data, _token: "{{ csrf_token() }}"})
}


export const verify = ({token, form}) => {
    return api.post('/auth/verify/email', {otp:form},)
}

export const sendOtp= (data) => {
    console.log(data)
    return api.post('/auth/password/forgot', data)
}


export const checkOtp= (data) => {
    return api.patch('/auth/password/validate-otp', data)
}

export const getDonationTypes = (token) => {
    return api.get('/donation-types',)
}

export const getDonationType = (token, id) => {
    return api.get(`/donation-types/${id}`,)
}


export const getDonors = () => {
    return api.get(`/donors`,)
}


export const getDonorsSummary = () => {
    return api.get(`/donors/summary`,)
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

export const onGetDonors = () =>{
    return useQuery('getDonors', getDonors)
}

export const onGetDonorsSummary = () =>{
    return useQuery('getDonorsSummary', getDonorsSummary)
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



