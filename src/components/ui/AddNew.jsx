import React, { useEffect } from 'react'
import { RiAddFill } from 'react-icons/ri'

const AddNew = () => {
    const url = "https://3000-artausif-taskifybackend-jjm3ydm6lc8.ws-us105.gitpod.io/tasks"

    const handleData = () =>{
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
            })
            .then(response => response.json())
            .then(data => console.log(data));
    }
  return (
    <div
    onClick={handleData} 
    className='text-gray-500 text-sm flex gap-2 items-center p-4 cursor-pointer hover:bg-gray-200 mt-4 '
    >
        <p><RiAddFill size={22}/></p>
        <p>Add a task </p>
    </div>
  )
}

export default AddNew