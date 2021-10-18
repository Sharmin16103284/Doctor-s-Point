import { wait } from "@testing-library/react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../components/Shared/Login/firebase/firebase.init";
authInit();

const useFirebase = () => {
    const auth = getAuth();
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [newUser, setNewUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    console.log(user);

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            })
            .catch (error =>{
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [auth , isLoading])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
            .finally(() => setIsLoading(false))
    }

    const emailpassReg = (e) => {
        e.preventDefault();

        if(password.length < 6){
          setError ("Password should be upper than six character");
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setNewUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const catchEmail = (e) => {
        setEmail(e.target.value);
    }

    const catchPassword = (e) => {
        setPassword(e.target.value);
    }

    //login (email & password)

    const loginEmailPassword = (email,password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            
            })
            .catch(error => {
                setError(error.message);    
            })
    }

    return {
        error,
        user,
        newUser,
        email,
        password,
        catchEmail,
        catchPassword,
        emailpassReg,
        googleSignIn,                   
        loginEmailPassword,
        isLoading,
        logOut,

    }

};

export default useFirebase;