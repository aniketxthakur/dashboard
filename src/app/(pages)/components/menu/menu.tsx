"use-client"
import React, { useState } from 'react';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { CiSearch } from 'react-icons/ci';
import Dropdown from '../dropdown/dropdown';

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu: React.FC<MenuProps> = ({ open, setOpen, close, setClose }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <div className="grid grid-cols-7 border bg-white">
          <div>
            <button className={`text-2xl pl-2 my-3 mr-4 md:hidden ${open ? "rotate-180 ml-2" : ""}`} onClick={() => setOpen(!open)}>
              <RiMenuUnfoldLine />
            </button>
          </div>
          <div className="grid justify-items-end col-span-6">
            <div className="flex">
              <div className="relative md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CiSearch />
                </div>
                <input type="text" className="w-full p-1.5 my-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded" placeholder="Search..." />
              </div>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
