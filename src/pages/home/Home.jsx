
import { useState } from "react";
import TaskDetails from "../../components/modals/TaskDetails";
import Sidebar from "../../components/Sidebar";


const Home = () => {
const [showModal, setShowModal] =useState(false);
const modalOpen =() =>{
    setShowModal(!showModal)
}
    return ( 
        <div className="">
           {/* <Sidebar/> */}
        </div>
     );
}
 
export default Home;