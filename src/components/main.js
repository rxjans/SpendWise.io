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

const main = () => {
  return (
    <div className='flex flex-row'>
      {/* left division */}
      <div className=' h-screen w-[320px] border-r-2'>
        <div className='flex flex-col'>
            <div className='flex border-b-2 h-[240px] justify-center items-center'>
                <img className='rounded-full w-[180px]' src={user}></img>
            </div>
            <div className='flex justify-center'>
                <div>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white w-[280px] mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm pl-24 py-2.5 text-center inline-flex items-center" type="button">Expenses<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                         </svg>
                     </button>


                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[280px] dark:bg-gray-700">
                     <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="/categories" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Categories</a>
                    </li>
                    <li>
                        <a href="/expense" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add Expenses</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
      </div>

      {/* right division */}
      <div className='h-screen w-[810]'>
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
