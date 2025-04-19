import { Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';

const AppLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="w-4/5 py-14 mt-20 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
