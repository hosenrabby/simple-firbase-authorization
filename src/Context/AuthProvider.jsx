import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';


const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const userSignUp = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const userSignIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword( auth , email, password)
    }

    const userSignOut = ()=>{
        setLoading(true)
        return signOut(auth).then(() => alert('You are successfully Log out')).catch(err => {console.log(err)})
    }

    

    const userWithGoogleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const userInfo = {
        user,
        loading,
        userSignUp,
        userSignIn,
        userSignOut,
        userWithGoogleSignIn
    }
    return (
        <>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </>
    );
};

export default AuthProvider;