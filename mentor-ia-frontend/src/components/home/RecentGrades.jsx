import React from 'react';
import { Link } from 'react-router-dom';
import './RecentGrades.css';

const RecentGrades = () => {
  const grades = [
    {
      id: 1,
      title: 'Examen parcial',
      course: 'Desarrollo de Aplicaciones Web',
      grade: 18,
      maxGrade: 20,
      date: '15 May, 2025'
    },
    {
      id: 2,
      title: 'Proyecto final',
      course: 'Programación en Móviles',
      grade: 17,
      maxGrade: 20,
      date: '12 May, 2025'
    },
    {
      id: 3,
      title: 'Examen de laboratorio',
      course: 'Construcción y Pruebas de Software',
      grade: 16,
      maxGrade: 20,
      date: '10 May, 2025'
    }
  ];
  
  return (
    <div className="recent-grades">
      <h3 className="section-title">Calificaciones recientes</h3>
      <div className="grades-list">
        {grades.map(grade => {
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
            <div key={grade.id} className="grade-item">
              <div className="grade-info">
                <h4 className="grade-title">{grade.title}</h4>
                <p className="grade-course">{grade.course}</p>
                <span className="grade-date">{grade.date}</span>
              </div>
              <div className={`grade-value ${gradeClass}`}>
                {grade.grade}/{grade.maxGrade}
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/grades" className="view-all-btn">
        Ver todas las calificaciones
      </Link>
    </div>
  );
};

export default RecentGrades;
