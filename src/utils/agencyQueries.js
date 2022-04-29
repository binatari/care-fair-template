import axios from "axios";
import { useMutation, useQuery } from "react-query";


export const agency = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
    headers:{
        'Content-Type':'application/json',
        accept:'application/json',
        // "Access-Control-Allow-Origin": "http://localhost:3000"
    }
})

agency.defaults.withCredentials=true

agency.interceptors.request.use(function (config) {
    const token = localStorage.getItem('agencyToken');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});




export const login = (data) => {
    return agency.post('agency/auth/login', data,
    // {
    //     withCredentials:true
    // } 
    )
    // .then(response => {
    //    console.log(response.headers);
    // })
}


export const register = (data) => {
    return agency.post('agency/auth/register', data,
    // {
    //     withCredentials:true
    // } 
    )
    // .then(response => {
    //    console.log(response.headers);
    // })
}

  export const onLogin = () =>{
    return useMutation(login)
}

export const onRegister = () =>{
    return useMutation(register)
}

export const allGivers = () => {
    return agency.get('agency/givers/list').then(res=>res.data).catch((err)=>err)
}

export const particularGiver = (id) => {
    return agency.get(`admin/givers/show/${id}/profile`).then(res=>res.data).catch((err)=>err)
}

export const onGetAllGivers = () => {
    return useQuery("allAgencyGivers",allGivers);
  };

  export const onGetParticularGiver = (id) => {
    return useQuery(["particularAgencyGiver", id],()=>particularGiver(id), {
        enabled:!!id
    });
  };
