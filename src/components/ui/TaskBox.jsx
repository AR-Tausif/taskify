
import { Tooltip } from '@nextui-org/react'
import { useContext, useState } from 'react'
import { RiEdit2Line, RiMoreFill, RiPieChart2Fill, RiQuestionAnswerLine } from 'react-icons/ri'
import {AuthContext} from '../../providers/AuthProvider'
const TaskBox = ({openModal, setOpenModal}) => {
  const [ show, setShow] = useState(false);


  return (
    <div 
    className='border overflow-hidden cursor-pointer shadow-sm p-5 hover:bg-sky-100 transition-all'
    onMouseOver={()=> setShow(true)}
    onMouseOut={()=> setShow(false)}
    onClick={()=> setOpenModal(!openModal)}
    >
      <div className="flex relative justify-between items-center">
          <div className="flex items-center gap-3">
              <p className="text-orange-400"><RiPieChart2Fill/></p>
              <p className='font-semibold'>Front-end Expert Challenge</p>
          </div>
          <div className={`opacity-0 absolute ${show && "opacity-100"} space-x-2 bg-sky-100 p-1 transition-all top-0 left-60 w-2/6`}>
            
            <Tooltip radius='none' content="Edit" id="editable">
              <button className='p-1  border hover:bg-sky-50 transition-all'><RiEdit2Line /></button>
            </Tooltip>
            <Tooltip radius='none' content="Delete, move to and more...">
              <button className='p-1 border hover:bg-sky-50 transition-all'><RiMoreFill/></button>
            </Tooltip>
            
          </div>
          <div className=''>
              <RiQuestionAnswerLine/>
          </div>

      </div>
    </div>
  )
}

export default TaskBox