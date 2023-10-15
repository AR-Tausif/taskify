import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const dir = "amar sunar bangla"
    const AuthValue = {
        dir,
    }
    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    )
}
 
export default AuthProvider;