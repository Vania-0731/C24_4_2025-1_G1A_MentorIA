import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Course_ModuleList from './pages/Course_ModuleList';
import CreateMaterialForm from './pages/Course_MaterialForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:idCourse/modules" element={<Course_ModuleList />} />
        <Route path="/courses/:idCourse/modules/:idModule/materials/new" element={<CreateMaterialForm/>} />
        {/*  */}
      </Routes>
    </Router>
  );
}

export default App;