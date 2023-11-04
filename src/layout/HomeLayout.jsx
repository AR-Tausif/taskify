import { Outlet } from "react-router-dom";
import Modal from "../components/modals/Modal"
import { useState } from "react";

const HomeLayout = () => {
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div>
            <Outlet/>
            <div>
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Modal
      </button>
      <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)}>
       
        </Modal>
      </div>
        </div>
     );
}
 
export default HomeLayout;