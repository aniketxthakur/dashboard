"use client"
import React, { FC, useState } from 'react'
import ButtonS from '../components/button/button'
 import Tab from '../components/tab/tabs'
import Organization from '../organization/page'

interface DashboardProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openTab: any;
  setOpenTab: React.Dispatch<React.SetStateAction<any>>;
}
const Dashboard: React.FC<DashboardProps> = (props) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="lg:grid grid-cols-2 flex flex-col ">
        <div>
          <p className="text-3xl block font-extrabold text-gray-700">
            CHM Global <span className="font-medium sm:text-2xl text-xl">Admin Dashboard</span>
          </p>
          <p className="mt-2">
            Welcome, <span className="font-bold">Marlon Teixeira!</span>
          </p>
        </div>
        <div className='grid lg:justify-items-end justify-items-start'>
          <div className="mt-1">
            <ButtonS name="Add Member" margin="" bg="bg-blue-50" textcolor='text-blue-700' visibility='' />
            <ButtonS name="Add Organization" margin="ml-3 mb-1" bg="" textcolor='' visibility='' />
          </div>
        </div>
      </div>
      <div  >
        <div>
          <Tab openTab={openTab} setOpenTab={setOpenTab} open={false} setOpen={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.')
          }} />
        </div>
      </div>
      <div className="border-t border-gray-300 my-4">
        <Organization />
      </div>
    </>
  )
}

export default Dashboard
