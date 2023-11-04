import NavBar from "../components/ui/NavBar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
    return ( 
        <div className="bg-gray-50">
            <NavBar/>
            <div className="flex overflow-hidden">
                    <Sidebar/>
                <div className="min-h-screen w-full bg-gray-50 relative overflow-y-auto lg:ml-64 px-20">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Main;