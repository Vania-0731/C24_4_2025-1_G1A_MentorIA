import React from 'react';

const CourseCard = ({ title, description }) => (
  <div className="card">
    <strong>{title}</strong>
    <p>{description}</p>
  </div>
);

export default CourseCard;
