import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AstroTool from './dashboard/AstroTool.jsx';
import Reports from './dashboard/Reports.jsx';
import Profile from './dashboard/Profile.jsx';

export default function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Astro Tool</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={logout} className="ml-auto">Logout</button>
      </nav>
      <Routes>
        <Route path="/" element={<AstroTool />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
