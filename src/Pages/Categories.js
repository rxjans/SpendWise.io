import React from 'react'

const Categories = () => {
  return (
    <div>
        <div className='text-center mb-24 mt-24'>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-200 md:text-5xl lg:text-6xl dark:text-white">Add a Category</h1>
                <p class="mb-6 text-lg font-normal text-blue-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Hey There! Glad to see you following up. You can go ahead and add different categories based on your daily requirement<br></br>(eg: Gas, Groceries, Shopping etc.). Let's Get Started:</p>
            </div>
      {/* table and additional assets */}
      <div className='flex flex-row space-x-[120px] justify-center h-screen'>
      
      {/* table */}
        <div className='flex border-2 rounded-lg mb-40 overflow-y-scroll h-[300px] w-[360px] bg-white '>
          <table class="table-auto text-sm text-left text-gray-500 border-collapse border-spacing-3">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="px-6 py-3">
                        Category
                    </th>
                    <th className="pl-[130px] py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="odd:bg-white even:bg-gray-50">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Gasoline
                    </th>
                    <td class="pl-[130px] py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-50 border-b">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Groceries
                    </th>
                    <td class="pl-[130px] py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-50 border-b ">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Shopping
                    </th>
                    <td class="pl-[130px] py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-50 border-b ">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Festival
                    </th>
                    <td class="pl-[130px] py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-50 border-b ">
                    <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Miscellaneous
                    </th>
                    <td class="pl-[130px] py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>

        {/* add and edit cat var  */}
        <div className='flex mt-32'>
          <form className='space-y-2'>
            <div>
            <input className="h-[24px] rounded" type='text'></input>
            </div>
            <div>  
              <input className="text-white bg-blue-600 rounded-2xl px-2" type="submit" value="Add" />
            </div>  
          </form>
        </div>

      </div>
    </div>
  )
}

export default Categories
