import React, {createContext, useEffect, useState } from "react";
import{GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../firebase/firebase.init";


export const AuthProvider = createContext("");
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading ,setLoading] = useState(false)
  const [navControl,setNavControl] = useState(false)
//sign-Up
const signUp = (email,password)=>{
    setLoading(false)
    return createUserWithEmailAndPassword(auth,email,password)
}
//sign-In
const signIn = (email,password) =>{
    setLoading(false)
    return signInWithEmailAndPassword(auth,email,password)
}
//sign-out
const signOutAuth = () =>{

    setLoading(false)
    return signOut(auth)
}
//google signIn
const google = () => {
    return signInWithPopup(auth,googleProvider)
}
useEffect(()=>{
    const subscribe = onAuthStateChanged(auth,currentUser =>{
        // console.log(currentUser)
        setUser(currentUser)
        setLoading(true)
    })
    return () => subscribe()
},[])
const navHandler =(control) =>{
    setNavControl(control)
}
// console.log(navControl)
  const userInfo = { user,loading ,signIn,signUp,signOutAuth,google,navHandler,navControl};
  return (
    <AuthProvider.Provider value={userInfo}>
        {children}
    </AuthProvider.Provider>
  );
};

export default UserContext;
