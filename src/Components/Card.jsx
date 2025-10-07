import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const Navigate = useNavigate();

  return (
    <div className='card-box' class="flex flex-col flex-1  ">
      <img class='w-full h-[200px]' onClick={()=>Navigate('recipe')}/>
      <div className="card-details" class="flex flex-col" >
        <h3 class="mt-2 mb-1">Chicken Pot Pie</h3>
        <div class="flex items-center pb-1 border-b-6 border-double">
          <FaRegClock />
          <span class="ml-2">15Min</span>
        </div>
      </div>
    </div>
  )
}

export default Card