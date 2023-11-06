import { RiBatteryChargeLine, RiMoreFill } from "react-icons/ri";
import { SearchIcon } from "../../components/svg/SearchIcon";
import UseCaseButton from "../../components/ui/UseCaseButton";
import {
  Button,
  Divider,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import StatusCard from "../../components/ui/StatusCard";
import TaskBox from "../../components/ui/TaskBox";
import { useState } from "react";
import TaskListDetails from "../../components/modals/TaskDetails";
import AddNew from "../../components/ui/AddNew";
import Modal from "../../components/modals/Modal";
import TaskDetailsModal from "../../components/modals/TaskDetailsModal";

const MainPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tasksList, setTaskList] = useState([]);
  const [newData, setNewData] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const onClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="max-w-screen-2xl  mx-auto">
      <div className="text-sm py-10 focus:border-none focus:outline-0">
        <h3 className="text-7xl font-semibold">Task List</h3>
        <p>Use this template to track you personal tasks.</p>
        <p>
          Click <span className="bg-gray-200 rounded-md">+ New</span> to create
          a new task directly on this board.
        </p>
        <p>Click an existing task to add additional context or subtasks.</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="border-black border-b-2 mt-5">
          <p className="text-xl font-semibold">Task Board</p>
        </div>
        <div className="flex items-center gap-3 ">
          <p className="text-gray-400 hover:bg-gray-100 p-1 ">Filter</p>
          <p className="text-gray-400 hover:bg-gray-100 p-1 ">Sort</p>
          <p className="text-gray-400 hover:bg-gray-100 p-1 text-xl">
            {" "}
            <RiBatteryChargeLine />{" "}
          </p>
          <p className="text-gray-400 hover:bg-gray-100 p-1 text-sm">
            {" "}
            <SearchIcon />{" "}
          </p>
          <RiMoreFill />
          <UseCaseButton />
        </div>
      </div>
      <Divider />

      <div className="flex gap-3 py-3">
        <div className="">
          <StatusCard title={"To Do"} />
          <div className="space-y-3">
            {tasksList.map((tsk, index) => (
              <Button
                key={index}
                onPress={onOpen}
                className="w-full text-left py-6 overflow-hidden cursor-pointer border shadow-sm  hover:bg-sky-100 transition-all "
                color="none"
              >
                <div className="">
                  <TaskBox
                    tsk={tsk}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </div>
              </Button>
            ))}
          </div>
          <AddNew setTaskList={setTaskList} setNewData={setNewData} />
        </div>
        <div className="">
          <StatusCard title={"Doing"} />
        </div>
        <div className="">
          <StatusCard title={"Done"} />
        </div>
      </div>

      {/* {openModal && <TaskListDetails onClose={onClose} isVisible />} */}
      <TaskDetailsModal
        scrollBehavior={scrollBehavior}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default MainPage;
