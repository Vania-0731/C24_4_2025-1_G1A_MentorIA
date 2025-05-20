import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './Forums.css';

const Forums = () => {
  const [forums, setForums] = useState([
    {
      id: 1,
      title: 'Discusión sobre Inteligencia Artificial',
      author: 'Dr. Miguel Ruiz',
      date: '12 May, 2025',
      replies: 5,
    },
    {
      id: 2,
      title: 'Metodologías de pruebas de software',
      author: 'Dra. Carmen Vega',
      date: '10 May, 2025',
      replies: 3,
    },
  ]);

  return (
    <div className="forums-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <h1>Foros de Discusión</h1>
          <div className="forums-list">
            {forums.map((forum) => (
              <div key={forum.id} className="forum-card">
                <h3>{forum.title}</h3>
                <p>Autor: {forum.author}</p>
                <p>Fecha: {forum.date}</p>
                <p>{forum.replies} Respuestas</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Forums;
