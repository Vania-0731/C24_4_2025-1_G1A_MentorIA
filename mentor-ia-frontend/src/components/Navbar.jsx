import React from 'react';

const Navbar = () => (
  <nav style={{ background: '#005f99', padding: '10px', color: 'white' }}>
    <h2>MentorIA</h2>
    <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
      <li>Inicio</li>
      <li>Cursos</li>
      <li>Materiales</li>
      <li>Perfil</li>
    </ul>
  </nav>
);

export default Navbar;
