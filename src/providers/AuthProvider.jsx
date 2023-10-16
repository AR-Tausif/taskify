import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState()
    const joinWithGamail = () =>{
        
    }
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