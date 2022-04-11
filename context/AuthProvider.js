import * as React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const AuthContext = React.createContext()

// const initState = {
//     password:" ",
//     address_line_1: " ",
//     address_line_2:" ",
//     postal_code:" ",
//     city:" ",
//     state:" ",
//     country_id:" ",
//     phone_number:" ",
//     email:" ",
//     should_send_email:" ",
//     bus:" ",
//     registration_number:" ",
//     is_subsidiary: false,
//     subsidiary_number:0,
//     website: " ",
//     name:" ",
//     preferred_location:" ",
//     hmrc_reference_number:" ",
//     alt_name:" ",
//     alt_address_line_1:" ",
//     alt_address_line_2:" ",
//     alt_city:" ",
//     alt_postal_code:" ",
//     alt_country_id:" ",
//     description_of_service:" ",
//     array:[]
// }

const initState = {
   
}
export function AuthContextProvider({children}){
    const [state, setState]= useState(initState)
    const setAuthContext = (context)=>{
        
        setState({...state, ...context})
        console.log(state)
    }
    return <AuthContext.Provider value={{...state, setAuthContext}}>
        {children}
    </AuthContext.Provider>
}


export function useAuthProvider(){
    const context = React.useContext(AuthContext)
    if (context === undefined){
        throw new Error('useAuth must be within a provider')
    }
    return context
}