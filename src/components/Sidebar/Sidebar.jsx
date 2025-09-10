import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBookOpen, FaListUl, FaBook, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Smart Study Material</h2>
      <nav>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaTachometerAlt className="sidebar-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/study-area" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaBookOpen className="sidebar-icon" />
              <span>Study Area</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo-list" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaListUl className="sidebar-icon" />
              <span>ToDo List</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaBook className="sidebar-icon" />
              <span>Library</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>
              <FaSignOutAlt className="sidebar-icon" />
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
