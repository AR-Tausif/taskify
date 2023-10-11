import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import Button from "../components/ui/Button";
import { Divider } from "@nextui-org/react";

const Main = () => {
    return ( 
        <div className="">
            <NavBar/>
            <div className="flex gap-3 max-w-screen-2xl mx-auto pb-4 pt-6 ">
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
            </div>
            <Divider/>

                {/* <div className="bg-white fixed border-r w-[30px] h-screen"></div> */}

                <Outlet/>

        </div>
     );
}
 
export default Main;