import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [auth, setAuth] = useState(null);

    
    const handleAuth = (e) => {
        if(auth){
        setAuth(null)
        }else{
        setAuth(true);
        }
    }

    const data = {auth, handleAuth};


    return(
        <AuthContext.Provider
            value={data}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider};
export default AuthContext;