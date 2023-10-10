import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";

const Main = () => {
    return ( 
        <div>
            <NavBar/>
            <div className="flex">
                <div className="bg-white border-r w-[30px] h-screen"></div>
                <div className="w-screen">
                <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Main;