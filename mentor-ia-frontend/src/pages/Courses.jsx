import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Desarrollo de Aplicaciones Empresariales',
      code: 'DesAplEmp',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/0a3d24/FFFFFF?text=Django+React',
      color: '#0a3d24',
      professor: 'Dr. Miguel Ruiz',
      schedule: 'Lunes y Miércoles 10:00 - 12:00',
      description: 'Este curso se enfoca en el desarrollo de aplicaciones empresariales utilizando patrones de diseño y frameworks modernos.',
      enrolled: 45,
      progress: 65,
    },
    {
      id: 2,
      title: 'Tecnologías Emergentes',
      code: 'TecEmergentes',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/0a394d/FFFFFF?text=Tech+Emergentes',
      color: '#0a394d',
      professor: 'Ing. Laura Mendoza',
      schedule: 'Martes y Jueves 14:00 - 16:00',
      description: 'Estudio de las tecnologías emergentes como Inteligencia Artificial, IoT, Blockchain y su aplicación en la industria.',
      enrolled: 38,
      progress: 42,
    },
    {
      id: 3,
      title: 'Construcción y Pruebas de Software',
      code: 'ConstPruebas',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/7d4e00/FFFFFF?text=QA+Testing',
      color: '#7d4e00',
      professor: 'Dra. Carmen Vega',
      schedule: 'Viernes 8:00 - 12:00',
      description: 'Metodologías para la construcción y pruebas de software, enfocándose en calidad y mejores prácticas de la industria.',
      enrolled: 32,
      progress: 78,
    },
    {
      id: 4,
      title: 'Desarrollo de Aplicaciones Web',
      code: 'DesAplWeb',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/be185d/FFFFFF?text=Web+Dev',
      color: '#be185d',
      professor: 'Dr. Roberto Sánchez',
      schedule: 'Lunes y Miércoles 14:00 - 16:00',
      description: 'Desarrollo de aplicaciones web utilizando tecnologías frontend y backend modernas.',
      enrolled: 50,
      progress: 55,
    },
    {
      id: 5,
      title: 'Investigación e Innovación Tecnológica',
      code: 'InvestigInnov',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/64748b/FFFFFF?text=Innovation',
      color: '#64748b',
      professor: 'Dr. Javier Martínez',
      schedule: 'Martes y Jueves 10:00 - 12:00',
      description: 'Metodologías de investigación e innovación tecnológica, con énfasis en el desarrollo de productos digitales.',
      enrolled: 28,
      progress: 60,
    },
    {
      id: 6,
      title: 'Programación en Móviles',
      code: 'ProgMov',
      period: 'PER I 2025 - 1',
      image: 'https://via.placeholder.com/300x150/7d4e00/FFFFFF?text=Mobile+Dev',
      color: '#7d4e00',
      professor: 'Ing. Patricia Gómez',
      schedule: 'Lunes y Miércoles 16:00 - 18:00',
      description: 'Desarrollo de aplicaciones móviles para Android e iOS utilizando tecnologías híbridas.',
      enrolled: 42,
      progress: 35,
    }
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const filteredCourses = courses.filter(course => {
    if (activeTab === 'all') {
      return course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             course.code.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (activeTab === 'inProgress') {
      return (course.progress > 0 && course.progress < 100) &&
             (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             course.code.toLowerCase().includes(searchQuery.toLowerCase()));
    } else if (activeTab === 'completed') {
      return course.progress === 100 &&
             (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             course.code.toLowerCase().includes(searchQuery.toLowerCase()));
    } else if (activeTab === 'notStarted') {
      return course.progress === 0 &&
             (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             course.code.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  return (
    <div className="courses-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <div className="courses-header">
            <h1>Mis Cursos</h1>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Buscar cursos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>

          <div className="courses-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Todos
            </button>
            <button 
              className={`tab-btn ${activeTab === 'inProgress' ? 'active' : ''}`}
              onClick={() => setActiveTab('inProgress')}
            >
              En progreso
            </button>
            <button 
              className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Completados
            </button>
            <button 
              className={`tab-btn ${activeTab === 'notStarted' ? 'active' : ''}`}
              onClick={() => setActiveTab('notStarted')}
            >
              No iniciados
            </button>
            <div className="view-toggle">
              <button 
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
              <button 
                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className={`courses-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.id} className="course-card" style={{ borderTopColor: course.color }}>
                  <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}>
                    <button className="favorite-button">☆</button>
                  </div>
                  <div className="course-info">
                    <span className="course-period">{course.period}</span>
                    <h3 className="course-title">{course.title}</h3>
                    <span className="course-code">{course.code}</span>

                    {viewMode === 'list' && (
                      <div className="course-details">
                        <div className="detail-item">
                          <span className="detail-label">Profesor:</span>
                          <span className="detail-value">{course.professor}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Horario:</span>
                          <span className="detail-value">{course.schedule}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Estudiantes:</span>
                          <span className="detail-value">{course.enrolled}</span>
                        </div>
                      </div>
                    )}

                    <div className="course-footer">
                      <div className="course-progress">
                        <div className="progress-bar">
                          <div className="progress-value" style={{ width: `${course.progress}%` }}></div>
                        </div>
                        <span className="progress-text">{course.progress}% completado</span>
                      </div>
                      <button className="course-action">Continuar</button>
                      <button
                        className="materials-btn"
                        onClick={() => navigate(`/materials/${course.code}`)}
                      >
                        Materiales
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-courses">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 21H14C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6C9.2 6 7 8.2 7 11V18H17V11Z" fill="#9CA3AF"/>
                </svg>
                <p>No se encontraron cursos que coincidan con tu búsqueda.</p>
                <button className="reset-btn" onClick={() => {setSearchQuery(''); setActiveTab('all');}}>
                  Mostrar todos los cursos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
