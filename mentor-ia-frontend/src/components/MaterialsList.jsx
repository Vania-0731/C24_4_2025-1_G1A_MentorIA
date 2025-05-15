import React from 'react';
import MaterialCard from './MaterialCard';

const dummyMaterials = [
  { title: 'Introducción a React', type: 'PDF' },
  { title: 'Backend con Django', type: 'Video' },
];

const MaterialsList = () => (
  <section>
    <h2>Materiales Educativos</h2>
    {dummyMaterials.map((material, i) => (
      <MaterialCard key={i} {...material} />
    ))}
  </section>
);

export default MaterialsList;
