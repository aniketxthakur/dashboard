import React from 'react'
import AdduserInput from '../../../components/Input/addinput'  
import ButtonS from '@/app/(pages)/components/button/button'
 
const AddUser = (props: any) => {
    return (
        <div className=" ">
            <p className=' font-medium text-lg'>Member Details</p>
            <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-4">

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <AdduserInput name={"Name"} type={'text'} />
                        <AdduserInput name={"Email"} type={'email'} />
                        <AdduserInput name={"Date of Birth"} />
                        <AdduserInput name={"Phone Number"} type={'number'} /> 
               
                    </div>
                    <div>
                            <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-white">Organization</label>
                            <select id="countries" className="bg-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option selected>Select</option>
                            <option >CHM</option>
                            <option>CHM Global</option>
                            <option>CHM</option>
                            <option>CHM</option>
                        </select>
                        </div> 
                    <div className="mt-4">
                    <ButtonS color="bg-black" TextColor="text-white" names="Next"/>
                    </div>
                </form>
             
            </div>
        </div>
    )
}

export default AddUser
