import { Button } from "@nextui-org/react";
import React from "react";
import { RiHome2Fill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-1/6 h-screen bg-gray-100 flex flex-col justify-start items-center p-5">
      <RiHome2Fill/>
      <ul className="list-none m-0 p-0">
        <li className="mb-5">
          <a href="#" className="text-black font-bold text-lg">
            Dashboard
          </a>
        </li>
        <li className="mb-5">
          <a href="#" className="text-black">
            Profile
          </a>
        </li>
        <li className="mb-5">
          <a href="#" className="text-black">
            Settings
          </a>
        </li>
        <li className="mb-5">
          <a href="#" className="text-black">
            Logout
          </a>
        </li>
      </ul>
      <Button
          className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <svg
            className=" h-6 w-6 stroke-1"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Open menu</span>
        </Button>
    </div>
  );
};

export default Sidebar;