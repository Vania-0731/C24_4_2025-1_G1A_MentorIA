import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const navigate = useNavigate();

  // Cierra el dropdown al hacer click en cualquier opción
  const handleCloseDropdown = () => setIsDropdownOpen(false);

  // Función para retroceder en el historial
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="back-button"
          onClick={handleGoBack}
          aria-label="Ir atrás"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="refresh-button" aria-label="Refrescar página">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4V10H7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 20V14H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.49 9.00001C19.9828 7.56646 19.1209 6.28248 17.9845 5.27201C16.8482 4.26155 15.4745 3.55983 13.9917 3.23785C12.5089 2.91587 10.9652 2.98345 9.51427 3.43374C8.06339 3.88404 6.75615 4.69878 5.73 5.80001L1 10M23 14L18.27 18.2C17.2438 19.3012 15.9366 20.116 14.4857 20.5663C13.0348 21.0166 11.4911 21.0841 10.0083 20.7622C8.52547 20.4402 7.1518 19.7385 6.01547 18.728C4.87913 17.7175 4.01717 16.4335 3.51 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
        <button className="icon-button star-button" aria-label="Favoritos">
          ⭐
        </button>
        <button className="icon-button notification-button" aria-label="Notificaciones">
          🔔
          {notifications > 0 && (
            <span className="notification-badge">{notifications}</span>
          )}
        </button>
        <button className="icon-button settings-button" aria-label="Configuración">
          ⚙️
        </button>
        <button className="icon-button download-button" aria-label="Descargas">
          ⬇️
        </button>
        <div
          className="user-profile"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          style={{ cursor: 'pointer' }}
          aria-label="Abrir menú de perfil"
        >
          {/* Ícono SVG (solo ícono, NO Link) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="profile-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width={40}
            height={40}
            style={{ borderRadius: '50%', backgroundColor: '#444', padding: '5px' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          {isDropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <Link to="/profile" onClick={handleCloseDropdown} className="dropdown-link">
                    Mi Perfil
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
