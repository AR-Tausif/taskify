import { RiBatteryChargeLine, RiMoreFill } from "react-icons/ri";
import { SearchIcon } from "../../components/svg/SearchIcon";
import UseCaseButton from "../../components/ui/UseCaseButton";
import { Divider } from "@nextui-org/react";
import StatusCard from "../../components/ui/StatusCard";
import TaskBox from "../../components/ui/TaskBox";
import { useState } from "react";
import TaskListDetails from "../../components/modals/TaskDetails";

const MainPage = () => {
  const [openModal, setOpenModal] = useState(false)
    const onClose=()=>{
        setOpenModal(false)
    }
    return ( 
        <div className="max-w-screen-2xl mx-auto">
            <div className="text-sm py-10">
                <h3 className="text-7xl font-semibold">Task List</h3>
                <p>Use this template to track you personal tasks.</p>
                <p>Click <span className="bg-gray-200 rounded-md">+ New</span> to create a new task directly on this board.</p>
                <p>Click an existing task to add additional context or sutasks.</p>
            </div>

            <div className="flex justify-between items-center">
                <div className="border-black border-b-2 mt-5">
                    <p className="text-xl font-semibold">Task Board</p>
                </div>
                <div className="flex items-center gap-3 ">
                    <p className="text-gray-400 hover:bg-gray-100 p-1 ">Filter</p>
                    <p className="text-gray-400 hover:bg-gray-100 p-1 ">Sort</p>
                    <p className="text-gray-400 hover:bg-gray-100 p-1 text-xl"> <RiBatteryChargeLine/> </p>
                    <p className="text-gray-400 hover:bg-gray-100 p-1 text-sm"> <SearchIcon/> </p>
                    <RiMoreFill/>
                    <UseCaseButton/>
                </div>
            </div>
                <Divider/>

                <div className="flex gap-3 py-3">
                    <div className="">
                        <StatusCard title={"To Do"} />
                        <div className="space-y-3">
                            <TaskBox openModal={openModal} setOpenModal={setOpenModal}/>
                        </div>
                    </div>
                    <div className="">
                        <StatusCard title={"Doing"} />
                    </div>
                    <div className="">
                        <StatusCard title={"Done"} />
                    </div>
                </div>

                {
                    openModal && <TaskListDetails onClose={onClose} isVisible/>
                }
        </div>
     );
}
 
export default MainPage;