import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth , GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config'

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const createUser = (email , password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth , email , password);
    }

    const userSingIn = (email , password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth , loggedUser => {
        setLoading(false);
        console.log('logged in Auth' , loggedUser)
        setUser(loggedUser)
      })
    
      return () => {
        return unsubscribe()
      }
    }, [])
    

    

    const authInfo = {
        user,
        googleSignIn,
        loading,
        logOut,
        createUser,
        userSingIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;