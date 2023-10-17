import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";


const PrivateRoutes = ({children})=>{
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <div>{children}</div>
}
export default PrivateRoutes;