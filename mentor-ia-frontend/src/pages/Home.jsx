import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import CourseSection from '../components/home/CourseSection';
import PendingTasks from '../components/home/PendingTasks';
import RecentGrades from '../components/home/RecentGrades';
import './Home.css';

const Home = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Desarrollo de Aplicaciones Empresariales',
      code: 'DesAplEmp',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/0a3d24/FFFFFF?text=Django+React',
      color: '#0a3d24',
      icon: 'django-react'
    },
    {
      id: 2,
      title: 'Tecnologías Emergentes',
      code: 'TecEmergentes',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/0a394d/FFFFFF?text=Tech+Emergentes',
      color: '#0a394d',
      icon: 'ai-brain'
    },
    {
      id: 3,
      title: 'Construcción y Pruebas de Software',
      code: 'ConstPruebas',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/7d4e00/FFFFFF?text=QA+Testing',
      color: '#7d4e00',
      icon: 'code-testing'
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones Web',
      code: 'DesAplWeb',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/be185d/FFFFFF?text=Web+Dev',
      color: '#be185d',
      icon: 'web-dev'
    },
    {
      id: 5,
      title: 'Investigación e Innovación Tecnológica',
      code: 'InvestigInnov',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/ffffff/333333?text=Innovation',
      color: '#ffffff',
      icon: 'innovation'
    },
    {
      id: 6,
      title: 'Programación en Móviles',
      code: 'ProgMov',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/7d4e00/FFFFFF?text=Mobile+Dev',
      color: '#7d4e00',
      icon: 'mobile-dev'
    }
  ]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <div className="top-section">
            <h1 className="main-title">Tablero</h1>
            <div className="actions">
              <button className="add-course-btn">+ Añadir curso</button>
              <div className="search-container">
                <input type="text" placeholder="Buscar cursos..." className="search-input" />
                <button className="search-btn">🔍</button>
              </div>
            </div>
          </div>
          
          <div className="dashboard-layout">
            <div className="courses-container">
              <CourseSection courses={courses} />
            </div>
            <div className="sidebar-info">
              <PendingTasks />
              <RecentGrades />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;