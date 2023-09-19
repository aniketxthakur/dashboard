"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineUserSwitch, AiFillCustomerService } from 'react-icons/ai';
import { GoOrganization } from 'react-icons/go';
import { MdOutlineBuild } from 'react-icons/md';
import { PiGearLight } from 'react-icons/pi';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
import Menu from '../menu/menu';
import Logo from './component/logo';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const routerr = usePathname();
  const [close, setClose] = useState(false);
  const menuData = [
    { name: "Dashboard", icon: <AiOutlineHome />, link: "/" },
    { name: "Organization", icon: <GoOrganization />, link: "/organization" },
    { name: "Users", icon: <AiOutlineUser />, link: "/users" },
    { name: "Roles", icon: <AiOutlineUserSwitch />, link: "/roles" },
    { name: "Build", icon: <MdOutlineBuild />, link: "/build" },
    { name: "Settings", icon: <PiGearLight />, link: "/settings" },
    { name: "Support", icon: <AiFillCustomerService />, link: "/support" },
  ];

  return (
    <>
      <div className={`${open ? "bg-gray-200 sm:bg-inherit bg-opacity-100 sm:static fixed inset-0 z-30" : ""}`}>
        <aside className={`${open ? "transform-none sm:w-20 bg-gray-50" : "-translate-x-full bg-gray-50"} fixed top-0 left-0 z-40 w-60 h-screen transition-transform border-r border-gray-200 sm:translate-x-0 h-full px-3 pb-4 overflow-y-auto`}  >
          <div className="flex items-center" >
            <div className={`flex ml-1 mt-5 mr-24 visible ${open ? "hidden" : ""}`}>
              <Logo />
            </div>
            <button className={`flex text-2xl mt-3 ${open ? "ml-3.5 rotate-180" : ""}`} onClick={() => setOpen(!open)}>
              <RiMenuFoldLine />
            </button>
          </div>
          {
            <ul className="pt-3">
              {menuData.map((e, index) => (
                <li className="my-2" key={index}>
                  <Link
                    href={e.link} className={`${routerr == e.link ? 'bg-gray-200' : ''} p-2 flex text-gray-800 hover:bg-gray-100 rounded-lg`} >
                    <span className={`text-xl ml-2`}>{e.icon}</span>
                    <span className={`ml-3 visible text-sm ${open ? "sm:hidden" : ""}`}>{e.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          }
        </aside>
        <Menu open={open} setOpen={setOpen} close={close} setClose={setClose} />
      </div>
    </>
  );
};

export default Sidebar;
