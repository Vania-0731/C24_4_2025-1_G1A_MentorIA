import React, { useState } from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="course-card" style={{ borderTopColor: course.color }}>
      <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}>
        <button 
          className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`} 
          onClick={toggleFavorite}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <div className="course-info">
        <span className="course-period">{course.period}</span>
        <h3 className="course-title">{course.title}</h3>
        <span className="course-code">{course.code}</span>
        <div className="course-footer">
          <div className="course-progress">
            <div className="progress-bar">
              <div className="progress-value" style={{ width: '65%' }}></div>
            </div>
            <span className="progress-text">65% completado</span>
          </div>
          <button className="course-action">Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;