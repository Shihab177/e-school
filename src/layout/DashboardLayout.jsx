import React from 'react';
import Logo from '../shared/Logo/Logo';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
       <div className="min-h-screen w-full bg-[#F5F7FA] flex ">
     <Sidebar/>
      <main className="w-[calc(100%-260px)] p-8 space-y-7  h-full">
        <Outlet/>
      </main>
    </div>
    );
};

export default DashboardLayout;