import TaskLittleCard from "./ui/TaskLittleCard";
import {RiAddLine } from "react-icons/ri"
const TasksLists = ({title, todoNum }) => {
    return ( 
        <div className="">
                    <h3 className="text-md font-semibold py-3">{title} <span className="mt-1">({todoNum})</span> </h3>
                    <div className="h-screen space-y-4 bg-gray-100 rounded-sm p-3">
                        <div className="text-center">
                          <div className="w-full flex py-3 text-md justify-center items-center space-x-3 border-dashed border-2 border-sky-300 text-sky-900 font-semibold rounded-md hover:bg-sky-200 cursor-pointer transition-all">
                          <RiAddLine/> <span>Add a task</span>
                          </div>
                        </div>
                        <TaskLittleCard />
                        <TaskLittleCard />
                        <TaskLittleCard />
                    </div>
                </div>
     );
}
 
export default TasksLists;