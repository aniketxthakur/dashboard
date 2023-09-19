
import React, { useState, FC } from 'react'
import { BiShow, BiHide } from 'react-icons/bi';

interface PasswordInputProps {
  title: string;
  name: string;
  placeHolder: string;
  value: string;
  change:any;
  blur:any;
}

const PasswordInput:  FC<PasswordInputProps> = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility(e:any) {
    e.preventDefault()
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">
        {props.title}
      </label>
      <div className="relative">
        <input  className=" bg-gray-50  border border-gray-300 text-sm rounded-lg w-full p-1.5"
          autoComplete='on'
          type={isPasswordVisible ? "text" : "password"}
          name={props.name}
          placeholder={props.placeHolder}
          value={props.value}
          onChange={props.change}
          onBlur={props.blur}
        />
        <button
          className="absolute inset-y-0 right-0 pe-2 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <BiHide />
          ) : (
            <BiShow />
          )}
        </button>
      </div>
    </div>
  )
}
export default PasswordInput
