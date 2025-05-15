import React from 'react';

const MaterialCard = ({ title, type }) => (
  <div className="card">
    <strong>{title}</strong> <em>({type})</em>
  </div>
);

export default MaterialCard;
