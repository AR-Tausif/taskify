import TasksLists from "../../components/TasksLists"

 
 const TaskVisible = () => {
   return (
     <div>
        <div className="flex max-w-screen-2xl mx-auto gap-5 mt-10">
                <TasksLists title={"To Do"} todoNum={3}/>
                <TasksLists title={"Working"} todoNum={3}/>
                <TasksLists title={"Done"} todoNum={3}/>
            </div>
     </div>
   )
 }
 
 export default TaskVisible