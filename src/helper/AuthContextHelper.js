import React, { useContext, useState, useEffect } from 'react'
import { auth } from './FirebaseHelper'

const AuthContenxtHelper = React.createContext();

export function useAuth(){
    return useContext(AuthContenxtHelper)
}

export function AuthProvider({children}) {

    const [currentUser, setCurentUser] = useState();

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurentUser(user)
        })

        return unsubscribe
    }, [])

  

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContenxtHelper.Provider value = {value}>
            {children}
        </AuthContenxtHelper.Provider>
    )
}
