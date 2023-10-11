import  { useState } from 'react'
import { RiAddLine, RiMoreFill } from 'react-icons/ri'

const StatusCard = ({ title }) => {
    const [ show, setShow] = useState(false)

  return (
    <div 
    className='flex justify-between w-[350px] cursor-pointer'
    onMouseOver={()=> setShow(true)}
    onMouseOut={()=> setShow(false)}
    >
        <div className="flex gap-2 items-center">
            <p className='bg-pink-300 px-1 rounded text-sm'>{title}</p>
            <p className='text-gray-400 px-3 py-0.5 rounded-sm transition-all hover:bg-gray-100'>1</p>
        </div>
        <div className={`opacity-0 ${show ? "opacity-100" : ""} flex gap-2 items-center`}>
            <p className='px-2 py-2 rounded-sm transition-all hover:bg-gray-100'>
            <RiMoreFill />
            </p>
            <p className='px-2 py-2 rounded-sm transition-all hover:bg-gray-100'>
            <RiAddLine/>
            </p>
        </div>
    </div>
  )
}

export default StatusCard