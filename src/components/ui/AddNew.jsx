import React, { useEffect, useState } from "react";
import { RiAddFill, RiDatabase2Fill, RiPieChart2Fill } from "react-icons/ri";
import TaskListDetails from "../modals/TaskDetails";
import Modal from "../modals/Modal";
import { useForm } from "react-hook-form";

const AddNew = ({ setTaskList, setNewData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);

  const url =
    "https://3000-artausif-taskifybackend-jjm3ydm6lc8.ws-us105.gitpod.io/tasks";

  const onClose = () => {
    setOpenModal(false);
  };
  // console.log(register.exampleRequired)
  const onSubmit = (data) => {
    setTaskList((prev) => [...prev, data.taskTitle]);
    onClose();
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
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <div
        className="text-gray-500 text-sm flex gap-2 items-center p-4 cursor-pointer hover:bg-gray-200 mt-4 "
        onClick={handleModal}
      >
        <p>
          <RiAddFill size={22} />
        </p>
        <p>Add new task </p>
        {/* {
                    openModal && <TaskListDetails onClose={onClose} isVisible/>
        } */}
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="relative mb-6">
              <input
                {...register("taskTitle", { required: true })}
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your task name..."
              />
            </div> */}
            {/* start here */}
            <div className="flex flex-col mb-6 p-5">
              {/* xl:w-1/4 lg:w-1/2 md:w-1/2  */}
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Tak Name
              </label>
              <div className="border border-green-400 shadow-sm rounded flex">
                <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                  <RiPieChart2Fill />
                </div>
                <input
                  {...register("taskTitle", { required: true })}
                  type="text"
                  id="input-group-1"
                  className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                  placeholder="Write your task name..."
                />
              </div>

              {errors.taskTitle || (
                <div className="flex justify-between items-center pt-1 text-red-400">
                  <p className="text-xs">Write your task name...!</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                      stroke="currentColor"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* end here */}

            <div className="flex">
              <div className="flex flex-col bg-black">
                {/* xl:w-1/4 lg:w-1/2 md:w-1/2  */}
                <label
                  htmlFor="input-group-1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Tak Name
                </label>
                <div className="border border-green-400 shadow-sm rounded flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <RiDatabase2Fill />
                  </span>
                  <input
                    {...register("taskTitle", { required: true })}
                    type="text"
                    id="input-group-1"
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                    placeholder="Write your task name..."
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddNew;
