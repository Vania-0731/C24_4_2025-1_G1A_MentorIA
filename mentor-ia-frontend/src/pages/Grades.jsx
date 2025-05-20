import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './Grades.css';

const Grades = () => {
  const [grades, setGrades] = useState([
    {
      id: 1,
      course: 'Desarrollo de Aplicaciones Web',
      grade: 18,
      maxGrade: 20,
      date: '15 May, 2025',
    },
    {
      id: 2,
      course: 'Programación en Móviles',
      grade: 17,
      maxGrade: 20,
      date: '12 May, 2025',
    },
    {
      id: 3,
      course: 'Construcción y Pruebas de Software',
      grade: 16,
      maxGrade: 20,
      date: '10 May, 2025',
    }
  ]);

  return (
    <div className="grades-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <h1>Calificaciones</h1>
          <div className="grades-list">
            {grades.map((grade) => {
              const percentage = (grade.grade / grade.maxGrade) * 100;
              let gradeClass = 'average';
              
              if (percentage >= 85) {
                gradeClass = 'excellent';
              } else if (percentage >= 70) {
                gradeClass = 'good';
              } else if (percentage < 60) {
                gradeClass = 'poor';
              }
              
              return (
                <div key={grade.id} className="grade-card">
                  <h3>{grade.course}</h3>
                  <p>Calificación: {grade.grade}/{grade.maxGrade}</p>
                  <p>Fecha: {grade.date}</p>
                  <div className={`grade-status ${gradeClass}`}>{percentage}%</div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Grades;
