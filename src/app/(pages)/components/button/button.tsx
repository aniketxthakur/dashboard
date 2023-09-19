import React from 'react'
interface ButtonProps {
    name: string;
    margin: string;
    bg: string;
    textcolor: string;
    visibility:string;
  }
const ButtonS: React.FC<ButtonProps>  = (props) => {
    return (
        <button className={` ${props.margin} ${props.bg}  ${props.textcolor} ${props.visibility} text-xs lg:text-sm lg:mt-0 mt-2 py-2 px-3 border border-gray-300 hover:border-blue-400 hover:bg-blue-50 rounded hover:text-red-800 `}>
            {props.name}
        </button>
    )
}

export default ButtonS
