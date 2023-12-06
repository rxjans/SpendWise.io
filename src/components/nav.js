import React from 'react'
import user from '../assets/logo.jpg';
import logo from '../assets/logo.png';

const nav = () => {
  return (
    <nav className='flex w-full justify-between px-12 border-b border-neutral-800 py-2'>
        {/* <div className=''><a href='/home'><img className='w-[200px] h-[48px]' src={logo}></img></a></div>
        <div className='flex text-white font-primary'>
            <div className='mr-4'>
            <h1>USERNAME</h1>
            <h6>CREDIT SCORE</h6>
            </div>
            
            <div className='border border-b shadow-lg rounded-full w-[52px] '>
                <img className='m-auto rounded-full h-[48px]' src={user}></img>
            </div>
        </div> */}




        
          <div className=''><a href='/home'><img className='w-[200px] h-[48px]' src={logo}></img></a></div>
          <div class="ml-24 w-full flex w-auto" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded bg-transparent text-blue-700 p-0 dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 ">About</a>
              </li>
              <li>
                <a href="#" class="text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 ">Services</a>
              </li>
              <li>
                <a href="#" class="text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 ">Contact</a>
              </li>
            </ul>
          </div>
          <div className='flex'>
            <div className='mr-4 text-white'>
              <h1>USERNAME</h1>
              <h6>CREDIT SCORE</h6>
              </div>
              
            <div className='border border-b shadow-lg rounded-full w-[52px] '>
                  <img className='m-auto rounded-full h-[48px]' src={user}></img>
            </div>
          </div>

    </nav>
  )
}

export default nav
