import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="refresh-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4V10H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 20V14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.49 9.00001C19.9828 7.56646 19.1209 6.28248 17.9845 5.27201C16.8482 4.26155 15.4745 3.55983 13.9917 3.23785C12.5089 2.91587 10.9652 2.98345 9.51427 3.43374C8.06339 3.88404 6.75615 4.69878 5.73 5.80001L1 10M23 14L18.27 18.2C17.2438 19.3012 15.9366 20.116 14.4857 20.5663C13.0348 21.0166 11.4911 21.0841 10.0083 20.7622C8.52547 20.4402 7.1518 19.7385 6.01547 18.728C4.87913 17.7175 4.01717 16.4335 3.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="navbar-center">
        <div className="url-bar">
          <span className="lock-icon">🔒</span>
          <span className="url">mentoria.edu.pe/dashboard</span>
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-button star-button">⭐</button>
        <button className="icon-button notification-button">
          🔔
          {notifications > 0 && <span className="notification-badge">{notifications}</span>}
        </button>
        <button className="icon-button settings-button">⚙️</button>
        <button className="icon-button download-button">⬇️</button>
        <div className="user-profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img src="https://via.placeholder.com/40" alt="Perfil de usuario" className="profile-image" />
          {isDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>Mi Perfil</li>
                <li>Configuración</li>
                <li>Cerrar Sesión</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;