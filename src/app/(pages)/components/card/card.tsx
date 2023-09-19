import React from 'react' 
import ButtonArrow from '../button/buttonArrow';


const Card = (props:any) => {
    return (

        <div className="grid grid-cols-5 justify-items-start p-3 text-gray-700">
            <div className='col-span-4 grid gap-1'>
                <p className='text-base'>{props.heading}</p>
                <p className='text-3xl font-bold'>{props.amount}</p>
                <p className='text-xs'>{props.text}</p>
            </div>
           <ButtonArrow bgColor={props.bgColor} />
        </div>
    )
}

export default Card
