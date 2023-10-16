import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import Button from "../components/ui/Button";
import { Divider } from "@nextui-org/react";
import Sidebar from "../components/Sidebar";

const Main = () => {
    return ( 
        <div className="">
            <NavBar/>
            {/* <div className="flex gap-3 max-w-screen-2xl mx-auto pb-4 pt-6 ">
                <NavLink to="board">
                <Button title={"Boards"} bg="blue" color="blue" />
                </NavLink>
                <NavLink to="history">
                <Button title={"History"} bg="gray" color={"gray"}/>
                </NavLink>
                <Button title={"Taskify Workspace"} bg="gray" color={"gray"}/>
                <NavLink to="taskvisile">
                <Button title={"Workspace Visiible"} bg="gray" color={"gray"}/>
                </NavLink>
                <Button title={"Invite"} bg="gray" color={"gray"}/>
            </div> */}
            <div className="flex overflow-hidden bg-white pt-16">
            <Sidebar/>
                {/* <div className="bg-white fixed border-r w-[30px] h-screen"></div> */}
            <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <Outlet/>
            </div>
            </div>

        </div>
     );
}
 
export default Main;