import React from 'react';

const CourseCard = ({ title, description }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default CourseCard;
