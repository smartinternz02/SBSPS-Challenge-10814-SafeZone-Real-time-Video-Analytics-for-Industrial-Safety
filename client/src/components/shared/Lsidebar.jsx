// import React from 'react';
import '../../css/Lsidebar.css';
// eslint-disable-next-line react/prop-types
function Lsidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <h1 className="sidebar-title">SafetyAlert</h1>
      </header>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item" onClick={() => setActiveSection('dashboard')}>Dashboard</li>
          <li className="sidebar-item" onClick={() => setActiveSection('analytics')}>Activities</li>
          <li className="sidebar-item" onClick={() => setActiveSection('settings')}>Settings</li>
        </ul>
      </nav>
    </div>
  );
}

export default Lsidebar;
