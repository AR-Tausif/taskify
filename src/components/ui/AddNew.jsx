import React, { useEffect, useState } from "react";
import { RiAddFill, RiDatabase2Fill, RiPieChart2Fill } from "react-icons/ri";
import TaskListDetails from "../modals/TaskDetails";
import Modal from "../modals/Modal";
import { useForm } from "react-hook-form";
import { Button, useDisclosure } from "@nextui-org/react";
import CreateNewModal from "../modals/CreateNewModal";

const AddNew = ({ setTaskList, setNewData }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const url =
    "https://3000-artausif-taskifybackend-jjm3ydm6lc8.ws-us105.gitpod.io/tasks";

  // console.log(register.exampleRequired)
  const onSubmit = (data) => {
    setTaskList((prev) => [...prev, data.taskTitle]);
  };
  // const handleData = () =>{

  //   setOpenModal(!openModal)

  //         // fetch(url, {
  //         //     method: 'POST',
  //         //     headers: { 'Content-Type': 'application/json' },
  //         //     body: JSON.stringify({ title: 'React POST Request Example' })
  //         // })
  //         // .then(response => response.json())
  //         // .then(data => console.log(data));
  // }

  return (
    <Button
      className="w-full bg-gray-200 rounded-sm hover:bg-gray-300 mt-4 transition-all ease"
      onPress={onOpen}
      radius="none"
      color="none"
    >
      <div className="text-gray-500 text-sm flex gap-2 items-center p-4 cursor-pointer ">
        <p>
          <RiAddFill size={22} />
        </p>
        <p>Add new task </p>
        <CreateNewModal
          register={register}
          handleSubmit={handleSubmit}
          setTaskList={setTaskList}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onSubmit={onSubmit}
        />
      </div>
    </Button>
  );
};

export default AddNew;
