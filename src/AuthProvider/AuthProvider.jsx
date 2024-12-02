import {  createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    // const [user, setUser]=useState()
    const UserSignUP = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserSignIn = (email, password)=>{

      return  signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
        name:'ananda',
        UserSignUP,
        UserSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;