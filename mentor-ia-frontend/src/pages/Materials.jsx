import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './Materials.css';

const Materials = () => {
  const [materials] = useState([
    {
      id: 1,
      courseCode: 'DesAplEmp',
      title: 'Introducción a Patrones de Diseño',
      type: 'PDF',
      uploadedAt: '10 May, 2025',
    },
    {
      id: 2,
      courseCode: 'DesAplEmp',
      title: 'Video: Arquitectura de Software',
      type: 'Video',
      uploadedAt: '12 May, 2025',
    },
    {
      id: 3,
      courseCode: 'TecEmergentes',
      title: 'Artículo: Inteligencia Artificial en la Educación',
      type: 'Artículo',
      uploadedAt: '15 May, 2025',
    },
  ]);

  return (
    <div className="materials-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <h1>Materiales Educativos</h1>
          <div className="materials-list">
            {materials.map(({ id, title, courseCode, type, uploadedAt }) => (
              <div key={id} className="material-card">
                <h3>{title}</h3>
                <p><strong>Curso:</strong> {courseCode}</p>
                <p><strong>Tipo:</strong> {type}</p>
                <p><strong>Subido:</strong> {uploadedAt}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Materials;
