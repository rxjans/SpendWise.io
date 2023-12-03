import React from 'react'
import logo from '../assets/logo.jpg';

const nav = () => {
  return (
    <nav className='flex w-full justify-between px-12 border-b-2'>
        <div><h1>expensify.io</h1></div>
        <div className='flex'>
            <div className='mr-4'>
            <h1>username</h1>
            <h6>credit score</h6>
            </div>
            <div className='border border-b shadow-lg rounded-full w-[52px] '>
                <img className='m-auto rounded-full w-[36px] h-[48px]' src={logo}></img>
            </div>
        </div>
    </nav>
  )
}

export default nav
