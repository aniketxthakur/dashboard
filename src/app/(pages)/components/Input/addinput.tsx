import React from 'react'

const AdduserInput = (props:any) => {
  return (
    <div>
    <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">{props.name}</label>
    <input type={props.type} id="first_name" className="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>
  )
}

export default AdduserInput
