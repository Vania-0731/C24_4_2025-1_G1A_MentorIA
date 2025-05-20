import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="user-profile-section">
        <img src="https://via.placeholder.com/60" alt="Perfil de usuario" className="profile-picture" />
        <h3 className="user-name">Cuenta</h3>
      </div>
      
      <div className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Tablero</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 8.5L12 15.5L2 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 15.5L12 8.5L22 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Cursos</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/forums" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
              </svg>
              <span>Foros</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/certificados" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H10C8.93913 21 7.92172 20.5786 7.17157 19.8284C6.42143 19.0783 6 18.0609 6 17V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8H5C3.93913 8 2.92172 8.42143 2.17157 9.17157C1.42143 9.92172 1 10.9391 1 12C1 13.0609 1.42143 14.0783 2.17157 14.8284C2.92172 15.5786 3.93913 16 5 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Certificados</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/rules" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12h6M9 16h6M9 8h6M6 21h12a2 2 0 0 0 2-2V7l-6-5H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
              </svg>
              <span>Normas MentorIA</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/grupos" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-3-3.87M7 21v-2a4 4 0 0 1 3-3.87M5 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM15 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
              </svg>
              <span>Grupos</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/bandeja" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-4.45-6.89z" />
              </svg>
              <span>Bandeja de entrada</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/historial" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Historial</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/ayuda" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span>Ayuda</span>
              <span className="badge">1</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
