import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/login">Login</a></li>
                {/* Add more navigation items as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;