/* eslint-disable react/prop-types */
import { createContext } from "react";
import {getAuth} from 'firebase-auth'
import app from "../firebase/firebase.config";


export  const AuthContext =  createContext
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const authInfo = {

    }

    return (
        <AuthContext.provider value={authInfo}>
            {children}
        </AuthContext.provider>
    );
};

export default AuthProvider;