import React from 'react'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {


  return (
    <div class="w-full flex justify-between items-center h-[75px] border-b-6 border-double">
      <div className="l-nav" class="flex-1">
        <div className="menu" class='hidden'>
          
        </div>
        <h1 class='font-serif font-bold text-4xl text-[#152e3b]'>Sora's</h1>
      </div>
      <div className="c-nav" class="flex-2">
        <CiSearch class="absolute box-border h-6 ml-2 mt-0.5"/>
        <input type="text" placeholder="Search" class='w-[75%] pl-7 border-2 rounded-2xl'/>
      </div>
      <div className="r-nav" class="flex-1">
        <ul class='flex justify-end'>
          <li><button class="mr-1 text-[#3A3A3A] bg-[#FDF6EC] border-2 rounded-4xl px-4 py-1">Login</button></li>
          <li><button class="bg-[#3A3A3A] text-[#FDF6EC] border-2 rounded-4xl px-4 py-1">SignUp</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar