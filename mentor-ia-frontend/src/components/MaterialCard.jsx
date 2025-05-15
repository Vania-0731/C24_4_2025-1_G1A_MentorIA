import React from 'react';

const MaterialCard = ({ title, type }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '8px' }}>
    <strong>{title}</strong> <em>({type})</em>
  </div>
);

export default MaterialCard;
