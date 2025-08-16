import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main>
          {/* Nơi render các route con */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
