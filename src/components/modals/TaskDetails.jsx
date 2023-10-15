
import { useState } from 'react';
import Container from '../../Container'
import DetailsTable from '../DetailsTable'
import CrNewComp from '../ui/CrNewComp'
// const TaskDetails = () => {
//   return (
//     <Container>
//       <h4 className='text-4xl py-5 font-bold'>Front-end Expert Challenge</h4>
//       <DetailsTable/>
//       <CrNewComp/>
//     </Container>
//   )
// }

// export default TaskDetails


const TaskListDetails = ({isVisible, onClose}) => {
  const [close, setClose] = useState(false)
  if(!isVisible) return null; 
  
  const handleClose =(e)=>{
    if(e.target.id == "wraper") onClose()
  }

  return (
    <div 
    className="fixed inset-1 top-0 right-0 bottom-0 w-full flex justify-content   bg-gray-300 backdrop-blur-sm p-10 transition-all ease-out" 
    id='wraper'
    onClick={handleClose}
    >
      <div className="justify-end">
          <div className="">
          <h4 className='text-4xl py-5 font-bold'>Front-end Expert Challenge</h4>
          <DetailsTable/>
          <CrNewComp/>
          </div>
      </div>
     </div>
  );
};

export default TaskListDetails;
