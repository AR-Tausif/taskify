
import Container from '../../Container'
import DetailsTable from '../DetailsTable'
import CrNewComp from '../ui/CrNewComp'
const TaskDetails = () => {
  return (
    <Container>
      <h4 className='text-4xl py-5 font-bold'>Front-end Expert Challenge</h4>
      <DetailsTable/>
      <CrNewComp/>
    </Container>
  )
}

export default TaskDetails