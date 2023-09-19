import React from 'react'

const Tabledata = () => {
  return (
    <tbody>
      <tr className="bg-white border-b">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
            <label className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
          <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Jese image" />
          <div className="pl-3">
            <div className="text-base font-semibold">Neil Sims</div>
          </div>
        </th>
        <td className="px-6 py-4">
          0000000000
        </td>
        <td className="px-6 py-4">
          <div className="flex ">
            <div className='bg-green-200 flex items-center px-2 rounded-md'> <p className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></p> <span className=" text-green-700">Active</span> </div>
          </div>
        </td>
        <td className="px-6 py-4">
          India
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 hover:underline">Edit user</a>
        </td>
      </tr>
    </tbody>
  )
}

export default Tabledata
