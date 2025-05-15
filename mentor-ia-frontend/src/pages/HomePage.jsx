import React from 'react';
import Navbar from '../components/Navbar';
import CoursesList from '../components/CoursesList';
import MaterialsList from '../components/MaterialsList';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Bienvenido a MentorIA</h1>
        <CoursesList />
        <MaterialsList />
      </main>
    </div>
  );
};

export default HomePage;
