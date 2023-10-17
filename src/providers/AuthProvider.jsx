import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"
import { toast } from "react-toastify";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState()
    const [user, setUser] = useState()

    const provider = new GoogleAuthProvider();

    const joinWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const joinWithGmail = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loggedOutFunc = () =>{
        console.log("kfakds")
        signOut(auth).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            toast(' Wow you are signed in!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          });
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggetUser => {
            setUser(loggetUser);
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    console.log(user)
    const AuthValue = {
        joinWithGoogle,
        joinWithGmail,
        loggedOutFunc,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    )
}
 
export default AuthProvider;