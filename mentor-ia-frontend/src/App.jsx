import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Materials from './pages/Materials';
import Tasks from './pages/Tasks';
import Grades from './pages/Grades';
import Forums from './pages/Forums';
import Profile from './pages/Profile';
import Rules from './components/home/Rules';

import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="app-content"> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
