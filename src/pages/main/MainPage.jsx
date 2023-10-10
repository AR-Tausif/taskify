import Button from "../../components/ui/Button";

const MainPage = () => {
    return ( 
        <div className="w-full  border-b mx-auto">
            <div className="flex gap-3 max-w-screen-2xl mx-auto pb-2 pt-4 ">
                <Button title={"Boards"} bg="blue" color="blue" />
                <Button title={"Zemoso"} bg="gray" color={"gray"}/>
                <Button title={"Taskify Workspace"} bg="gray" color={"gray"}/>
                <Button title={"Workspace Visiible"} bg="gray" color={"gray"}/>
                <Button title={"Invite"} bg="gray" color={"gray"}/>
            </div>
        </div>
     );
}
 
export default MainPage;