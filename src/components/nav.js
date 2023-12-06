import React from 'react'
import user from '../assets/logo.jpg';
import logo from '../assets/logo.png';

const nav = () => {
  return (
    <nav className='flex w-full justify-between px-12 border-b-2 bg-blue-800 py-2'>
        <div className=''><img className='w-[200px] h-[48px]' src={logo}></img></div>
        <div className='flex text-white font-mono'>
            <div className='mr-4'>
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
