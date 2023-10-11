import React from 'react'
import { RiCloseLine, RiDashboard2Fill, RiDashboardFill } from 'react-icons/ri'
import BoardTempCard from '../../components/ui/BoardTempCard'
import { NavLink } from 'react-router-dom'

const Boards = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
        <h3 className='py-4'>Boards</h3>
        <div className="flex justify-between">
            <div className="space-y-3">
                <div className="flex text-4xl font-semibold items-center gap-2">
                    <RiDashboardFill color='blue' />
                    <p >Most popular Templates</p>
                </div>
                <div className="flex">
                    <p>Get going faster with a template from the Taskify community or choose any category</p>
                </div>
            </div>
            <p className='bg-gray-200 w-10 h-10 text-xl p-2 text-center rounded-sm'>
            <RiCloseLine/>
            </p>
            
        </div>
        <div className="py-8">
            <div className="grid grid-cols-4 space-x-7">
                <BoardTempCard/>
                <BoardTempCard/>
                <BoardTempCard/>
                <BoardTempCard/>
            </div>
            <div className="mt-10">
            <NavLink to="" className='text-sm text-sky-500'>Browse the full template gallery</NavLink>
            </div>
        </div>
        <div className="flex py-10">
            <div className="bg-gray-100 text-center py-10 px-32 rounded-sm">
                <p>Create new board</p>
            </div>
        </div>
    </div>
  )
}

export default Boards