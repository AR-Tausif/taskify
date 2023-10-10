import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import Button from "../components/ui/Button";

const Main = () => {
    return ( 
        <div className="">
            <NavBar/>
            <div className="flex gap-3 max-w-screen-2xl mx-auto pb-4 pt-6 ">
                <Button title={"Boards"} bg="blue" color="blue" />
                <Button title={"Zemoso"} bg="gray" color={"gray"}/>
                <Button title={"Taskify Workspace"} bg="gray" color={"gray"}/>
                <Button title={"Workspace Visiible"} bg="gray" color={"gray"}/>
                <Button title={"Invite"} bg="gray" color={"gray"}/>
            </div>
            <div className="flex">
                <div className="bg-white fixed border-r w-[30px] h-screen"></div>
                <div className="w-screen">
                <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Main;