import React from 'react';
import user from '../assets/user.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from '../Pages/Categories';
import Expenses from '../Pages/Expenses';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Monthly from '../Pages/Monthly';
import Weekly from '../Pages/Weekly';
import Yearly from '../Pages/Yearly';
import bg from '../assets/bg.jpg';
import planet from '../assets/planet.png';
import moon from '../assets/moon.png';

const main = () => {
  return (
    
    <div className='flex flex-row'>
      {/* left division */}
      <div className=' h-screen w-[320px] border-neutral-800 border-r'>
        <div className='flex flex-col'>
            <div className='flex border-b border-neutral-800 h-[240px] justify-center items-center'>
            
                    <img className='rounded-full w-[180px]' alt="home" src={user}></img>
          
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black hover:text-white w-[280px] mt-2 font-medium rounded-2xl text-sm pl-24 py-2.5 text-center inline-flex items-center bg-gray-200 ring-1 ring-slate-900/5 shadow-lg space-y-3 focus:bg-blue-700 hover:bg-blue-700 hover:ring-sky-500 focus:ring-sky-500" type="button">Expenses<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                         </svg>
                     </button>


                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[280px]">
                     <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="/categories" className="block px-4 py-2 hover:bg-gray-100">Categories</a>
                    </li>
                    <li>
                        <a href="/expense" className="block px-4 py-2 hover:bg-gray-100">Add Expenses</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown1" className="text-black hover:text-white w-[280px] mt-2 font-medium rounded-2xl text-sm pl-24 py-2.5 text-center inline-flex items-center bg-gray-200 ring-1 ring-slate-900/5 shadow-lg space-y-3 focus:bg-blue-700 hover:bg-blue-700 hover:ring-sky-500 focus:ring-sky-500" type="button">Overview<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                         </svg>
                     </button>


                    <div id="dropdown1" className="focus:mb-10 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[280px]">
                     <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="/categories" className="block px-4 py-2 hover:bg-gray-100">Monthly Overview</a>
                    </li>
                    <li>
                        <a href="/expense" className="block px-4 py-2 hover:bg-gray-100">Yearly Overview</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
      </div>

      {/* right division */}
      <div className='flex-1 w-full h-screen'>
        <img className="absolute top-18 left-80 overflow-hidden w-[320px]" src={planet}></img>
        <img className='absolute w-[420px] bottom-0 right-0' src={moon}></img>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/expense" element={<Expenses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/weekly" element={<Weekly />} />
              <Route path="/yearly" element={<Yearly />} />
            </Routes>
         </BrowserRouter>
  
      </div>
    </div>
  )
}

export default main
