import React from 'react'
import { GrNext } from 'react-icons/gr';


const ButtonArrow = (props:any) => {
    return (
        <div className='my-auto'>
            <button className={`rounded-full p-3 border ${props.bgColor} text text-xl font-bold sm:ml-5 ml-2 mt-1 `}><GrNext /></button>
        </div>
    )
}

export default ButtonArrow
