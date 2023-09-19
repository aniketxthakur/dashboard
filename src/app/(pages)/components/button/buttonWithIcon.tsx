import React from 'react'
const ButtonWithIcon = (props: any) => {
    return (
       <div >
         <button type="button" onClick={props.click} className="ml-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-md text-sm px-2 py-2 text-center inline-flex items-center mb-2">
            <span className="sm:text-xl text-xs">{props.icon}</span>
            {props.name}
        </button>
        <button type="button" onClick={props.click2} className="ml-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-md text-sm px-2 py-2 text-center inline-flex items-center mb-2">
            <span className="sm:text-xl text-xs">{props.icon2}</span>
            {props.name2}
        </button>
       </div>
    )
}
export default ButtonWithIcon
