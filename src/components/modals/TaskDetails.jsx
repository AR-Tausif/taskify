
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


const TaskListDetails = () => {
  return (
    <div className="fixed w-3/6 top-0 right-0 bottom-0  bg-gray-300 p-10 transition-all ease-out">
      
       <h4 className='text-4xl py-5 font-bold'>Front-end Expert Challenge</h4>
       <DetailsTable/>
       <CrNewComp/>
     </div>
  );
};

export default TaskListDetails;
