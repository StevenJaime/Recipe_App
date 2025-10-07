import React from 'react'
import Card from './Card'


const Section = ({name}) => {

  
  return (
    <div className="section" class="border-b-6 border-double ">
        <h1 class="text-center pt-4 pb-2 border-b-6 border-double text-6xl">{name}</h1>
        <div className="section-box" class="flex gap-[10px] w-[98%] my-4 mx-auto">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Section