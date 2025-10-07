import React from 'react'
import Card from '../Components/Card'

const Recipes = () => {
  return (
    <div className="recipes-box" class="flex gap-2 ">
        <div className="l-box" class="flex-1 mt-[88px]">
            <ul>
                <li class="flex items-center">
                    <div class="w-[50px] h-[50px] border-2 rounded-2xl"></div>
                    <h3 class="text-lg p-4">Breakfast</h3>
                </li>
                <li class="flex items-center">
                    <div class="w-[50px] h-[50px] border-2 rounded-2xl"></div>
                    <h3 class="text-lg p-4">Lunch</h3>
                </li>
                <li class="flex items-center">
                    <div class="w-[50px] h-[50px] border-2 rounded-2xl"></div>
                    <h3 class="text-lg p-4">Dinner</h3>
                </li>
                <li class="flex items-center">
                    <div class="w-[50px] h-[50px] border-2 rounded-2xl"></div>
                    <h3 class="text-lg p-4">Appetizer</h3>
                </li>
                <li class="flex items-center">
                    <div class="w-[50px] h-[50px] border-2 rounded-2xl"></div>
                    <h3 class="text-lg p-4">Dessert</h3>
                </li>   
            </ul>
        </div>
        <div className="r-box" class="flex-3">
            <h1 class="text-4xl pt-4 pb-8">Recipes</h1>
            <div className="cards-box" class="grid grid-cols-3 gap-x-4 gap-y-[50px]">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    </div>
  )
}

export default Recipes