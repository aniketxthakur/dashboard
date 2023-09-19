import React from 'react'

const TableData = () => {
  return (
    <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label className="sr-only">checkbox</label>
        </div>
      </td>
      <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">Neil Sims</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> <span className="bg-green-100 text-green-700">Active</span>
        </div>
      </td>
      <td className="px-6 py-4">
        MD
      </td> 
      <td className="px-6 py-4">
       <div className="sm:flex">
       <p className=' text-blue-700'><span className='bg-blue-100'>CHM Global</span></p>
       <p className=' text-blue-700 ms-2'><span className='bg-blue-100'>CHM Global</span></p>
       </div>
      </td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
      </td>
    </tr>
  </tbody>
  )
}

export default TableData
