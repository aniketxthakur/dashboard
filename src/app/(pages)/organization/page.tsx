"use client"
import React, { useState } from 'react'
import Tabledata from './component/table/tabledata'
import ButtonS from '../components/button/button'
import DefaultDropdown from '../components/dropdown/defaultDropdown'

const Organization = (props: any) => {
  const [isProfile, setIsProfile] = useState(false);
  const profileData = [
    { name: "Profile", link: "/" },
    { name: "Billing", link: "/organization" },
    { name: "Logs", link: "/users" },
    { name: "T&C", link: "/roles" },
  ];
  return (
    <>
      <div className="flex justify-between pb-0 sm:pb-0 bg-white mt-3.5">
        <h1 className='text-2xl font-bold '>Organization</h1>
        <div className='lg:justify-items-end justify-items-center grid grid-cols-1'>
          <div className='flex justify-center flex-col sm:flex-row sm:justify-end'>
            <div className='mb-2 sm:mb-0'>
              <DefaultDropdown />
            </div>
            <div className="" onClick={() => { setIsProfile(!isProfile); }}  >
              <ButtonS name="Add Organization" margin="mx-3" bg="bg-blue-50" textcolor="text-blue-700" visibility="hidden" />
              {isProfile && (
                <div className="absolute right-0 z-10 mt-2 w-52 mr-3 rounded-md shadow-lg border bg-white" onMouseLeave={() => { setIsProfile(false) }}>
                  <div className="py-2 px-4 text-sm text-gray-900 border-b">
                    <p className='font-semibold'>CHM</p>
                    <a className="break-words text-xs">CHM@synswift.com </a>
                  </div>
                  <div className="p-1 text-sm text-gray-700">
                    {
                      profileData.map((e) => {
                        return (
                          <a href={e.link} className="block py-1 px-3 hover:bg-gray-100">{e.name}</a>
                        )
                      })
                    }
                  </div>
                  <div className="p-1 text-sm text-gray-900 border-t">
                    <div className="hover:bg-gray-100 p-2">
                      <a href="">Logout</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th scope="col" className="p-4">

              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <Tabledata />
          <Tabledata />
          <Tabledata />
          <Tabledata />
        </table>
      </div>
    </>
  )
}
export default Organization
