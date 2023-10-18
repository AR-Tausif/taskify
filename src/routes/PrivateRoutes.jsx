import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";


const PrivateRoutes = ({children})=>{
    const {user} = useContext(AuthContext)
    
    if(user){
        return <div>{children}</div>
    }
}
export default PrivateRoutes;