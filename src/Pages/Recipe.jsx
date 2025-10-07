import React from 'react'

const Recipe = () => {
  return (
    <div className="recipe-box" class="flex flex-col">
        <h1 class="text-center pt-6 pb-4 border-b-6 border-double text-6xl">Chicken Pot Pie</h1>
        <div className="recipe-details" class=" py-2 px-12 flex justify-between items-center border-b-6 border-double" >
            <div class=" flex flex-col">
                <span>Prep</span>
                <span>10Min</span>
            </div>
            <div class=" flex flex-col">
                <span>Cook</span>
                <span>30Min</span>
            </div>
            <div class=" flex flex-col">
                <span>Serve</span>
                <span>4</span>
            </div>
        </div>
        <div className="recipe-section" class="flex gap-5 py-10">
            <div className="l-box" class="  border-3 border-dashed flex flex-col flex-1">      
                    <h2 class="text-3xl p-2">Ingredients</h2>
                    <ul class="ml-4 p-2 list-disc">
                    <li>salt</li>
                    <li>salt</li>
                    <li>salt</li>
                    <li>salt</li>
                    <li>salt</li>
                    <li>salt</li>
                    </ul>
            </div>
            <div className="r-box" class="flex flex-col flex-3">
                <img class="w-full border-2 h-[300px] mb-10"/>
                <h2 class="text-4xl py-4">Preparation</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Eaque, tempora! Corporis velit dolore facere. Repellendus 
                    pariatur corporis optio ex officia repellat, sequi placeat 
                    accusamus nam. Eaque quo quia dolor commodi.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Recipe