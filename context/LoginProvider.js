import * as React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
const LoginContext = React.createContext()


const initState = {
   step:0
}
export function LoginContextProvider({children}){
    React.useEffect(()=>{
        
    },[])
    const [state, setState]= useState(initState)
    const setLoginContext = (context)=>{
        
        setState({...state, ...context})
        console.log(state)
    }
    return <LoginContext.Provider value={{...state, setLoginContext}}>
        {children}
    </LoginContext.Provider>
}

export function useLoginProvider(){
    const context = React.useContext(LoginContext)
    if (context === undefined){
        throw new Error('useAuth must be within a provider')
    }
    return context
}