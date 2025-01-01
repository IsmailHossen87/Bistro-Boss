import React, { createContext, useEffect, useState } from 'react';

export const Authcontext = createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)

    // registetion
    const loginByemail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const loginGoogle = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password) 
    }
    // google login
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update user name and profile
    const updateUser = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((Curentuser) => {
            setUser(Curentuser)
            setLoading(false)
        })
        return ()=> {
            return unsubscribe()
        }
    })



    const authInfo = {
        loginByemail,
        loginGoogle,
        logOut,
        googleLogin,
        updateUser,
        user,   
        loading
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;