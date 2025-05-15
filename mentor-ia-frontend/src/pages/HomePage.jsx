import React from 'react';
import Navbar from '../components/Navbar';
import CoursesList from '../components/CoursesList';
import MaterialsList from '../components/MaterialsList';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Bienvenido a MentorIA</h1>
        <h2>Cursos disponibles</h2>
        <CoursesList />
        <h2>Materiales Educativos</h2>
        <MaterialsList />
      </div>
    </>
  );
};

export default HomePage;
