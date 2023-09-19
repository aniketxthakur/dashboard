import React from 'react'
import { BsSearch } from 'react-icons/bs';

const Datepicker = (props: any) => {
    return (
        <div className="relative max-w-sm z-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <div className="w-4 h-3 text-gray-500 dark:text-gray-400">
                    <BsSearch/>
                </div>
            </div>
            <input datepicker-orientation="bottom right" type="text" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded block  w-full pl-10 px-2 sm:py-2 py-1" placeholder={props.placeholder} />
        </div>
    )
}
export default Datepicker
