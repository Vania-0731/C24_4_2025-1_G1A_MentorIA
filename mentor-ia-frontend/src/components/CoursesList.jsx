import React from 'react';
import CourseCard from './CourseCard';

const dummyCourses = [
  { title: 'Desarrollo Web', description: 'Aprende React, Django y más' },
  { title: 'Programación Móvil', description: 'Kotlin y desarrollo nativo' },
];

const CoursesList = () => (
  <div>
    {dummyCourses.map((course, i) => (
      <CourseCard key={i} title={course.title} description={course.description} />
    ))}
  </div>
);

export default CoursesList;
