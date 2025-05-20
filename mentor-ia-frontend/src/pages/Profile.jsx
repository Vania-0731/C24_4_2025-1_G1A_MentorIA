import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './Profile.css';

const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Perfil guardado correctamente');
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <h1>Mi Perfil</h1>
          <p>Bienvenido a tu perfil. Aquí puedes ver y editar tu información personal.</p>

          <form className="profile-form" onSubmit={handleSave}>
            <div className="photo-section">
              <label htmlFor="photo-upload" className="photo-label">
                {photo ? (
                  <img src={photo} alt="Foto de perfil" className="profile-photo" />
                ) : (
                  <div className="photo-placeholder">Sube tu foto</div>
                )}
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
            </div>

            <div className="input-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                placeholder="Número telefónico"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button type="submit" className="save-btn">
              Guardar Cambios
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Profile;
