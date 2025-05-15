import React from 'react';
import MaterialCard from './MaterialCard';

const dummyMaterials = [
  { title: 'Introducción a React', type: 'PDF' },
  { title: 'Backend con Django', type: 'Video' },
];

const MaterialsList = () => (
  <div>
    {dummyMaterials.map((material, i) => (
      <MaterialCard key={i} {...material} />
    ))}
  </div>
);

export default MaterialsList;
