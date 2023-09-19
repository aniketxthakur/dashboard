"use client"
import React, { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<DashboardLayoutProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <div className='h-full overflow-y-auto'>
        <div className={`mt-16 ${open ? "ml-3 sm:ml-24 mr-0 sm:mr-4" : "ml-3 sm:ml-64 mr-3 sm:mr-4"}`}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
