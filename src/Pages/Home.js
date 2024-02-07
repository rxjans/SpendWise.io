import React from 'react'
import { MdFolderOpen } from 'react-icons/md';

const Home = () => {
  return (
    <div className='ml-12 mt-2 mr-48'>
      {/* <h1 className='text-[20px]'><p>
<h1 className='text-[32px] text-blue-600'>Welcome! 🌟</h1>

We're thrilled to have you here! This page is your financial command center, designed to make managing your expenses a breeze. Follow these simple steps to get started:<br></br>
<br></br>
<h1 className='text-[24px] text-blue-600 underline'>Add Categories:</h1><br></br>

Click on the "Expenses" button to create customized buckets for your expenses. Whether it's groceries, entertainment, or travel, tailor it to fit your life!
<br></br><br></br>
<h1 className='text-[24px] text-blue-600 underline'>Organize Your Expenses:</h1><br></br>

Under each category, click on "Add Expense" to record your spending. Enter the details, like the amount, date, and a brief description. This way, you'll have a clear snapshot of where your money is going.
<br></br><br></br>
<h1 className='text-[24px] text-blue-600 underline'>Stay on Top of Things:</h1><br></br>

Periodically review your categories and expenses to track your financial journey. It's a fantastic way to identify patterns, set goals, and ensure your budget aligns with your priorities.
<br></br><br></br>
<h1 className='text-[24px] text-blue-600 underline'>Edit and Delete with Ease:</h1><br></br>

Made a mistake or need to update an entry? No problem! Simply click on the expense or category you want to adjust and hit "Edit" or "Delete" to keep everything tidy.
Use Insights for Financial Wisdom:<br></br><br></br>

Our platform provides insights into your spending habits. Take advantage of these features to make informed decisions and achieve your financial goals.
Share the Joy (or Savings):

We're all here to support each other!<br></br>
Remember, this is your space to take control of your finances. Enjoy the process, and if you ever need assistance, our support team is just a message away.
<br></br><br></br>
<h1 className='text-[22px] bg-blue-600 text-center py-1.5 text-white border-b rounded-2xl w-[240px] '>Happy budgeting! 🚀</h1></p></h1> */}



          <div>
            <div className='text-center mb-8 mt-24'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl dark:text-white">Welcome to SpendWise.io</h1>
                <p class="mb-6 text-lg font-normal text-blue-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We're thrilled to have you here! This page is your financial command center, designed to make managing your expenses a breeze. Follow these simple steps to get started:</p>
            </div>

            <div className='grid grid-cols-2 gap-y-12'>
              <div >
                <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-700 hover:ring-sky-500">
                  <div class="flex items-center space-x-3 group">
                    <div className='group-hover:text-white'><MdFolderOpen /></div>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">Add Categories:</h3>
                  </div>
                  <p class="text-slate-500 group-hover:text-white text-sm">Click on the "Expenses" button to create customized buckets for your expenses. Whether it's groceries, entertainment, or travel, tailor it to fit your life!</p>
                </a>
              </div>
              
              <div>
                <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-700 hover:ring-sky-500">
                  <div class="flex items-center space-x-3 group">
                    <div className='group-hover:text-white'><MdFolderOpen /></div>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">Organize Your Expenses:</h3>
                  </div>
                  <p class="text-slate-500 group-hover:text-white text-sm">Under each category, click on "Add Expense" to record your spending. Enter the details, like the amount, date, and a brief description. This way, you'll have a clear snapshot of where your money is going.</p>
                </a>
              </div>

              <div>
                <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-700 hover:ring-sky-500">
                  <div class="flex items-center space-x-3 group">
                    <div className='group-hover:text-white'><MdFolderOpen /></div>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">Stay on Top of Things:</h3>
                  </div>
                  <p class="text-slate-500 group-hover:text-white text-sm">Periodically review your categories and expenses to track your financial journey. It's a fantastic way to identify patterns, set goals, and ensure your budget aligns with your priorities.</p>
                </a>
              </div>

              <div>
                <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-700 hover:ring-sky-500">
                  <div class="flex items-center space-x-3 group">
                    <div className='group-hover:text-white'><MdFolderOpen /></div>
                    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">Edit and Delete with Ease:</h3>
                  </div>
                  <p class="text-slate-500 group-hover:text-white text-sm">Made a mistake or need to update an entry? No problem! Simply click on the expense or category you want to adjust and hit "Edit" or "Delete" to keep everything tidy.</p>
                </a>
              </div>
            
            </div>
            </div>
            <div className='text-center'>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Let's Go
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
          </div>













    </div>
  )
}

export default Home
