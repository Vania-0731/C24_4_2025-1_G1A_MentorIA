import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Investigación de Machine Learning',
      course: 'Tecnologías Emergentes',
      dueDate: '25 May, 2025',
    },
    {
      id: 2,
      title: 'Implementar API REST',
      course: 'Desarrollo de Aplicaciones Web',
      dueDate: '27 May, 2025',
    },
    {
      id: 3,
      title: 'Pruebas unitarias',
      course: 'Construcción y Pruebas de Software',
      dueDate: '29 May, 2025',
    }
  ]);

  return (
    <div className="tasks-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <h1>Tareas Pendientes</h1>
          <div className="tasks-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-card">
                <h3>{task.title}</h3>
                <p>Curso: {task.course}</p>
                <p>Fecha de vencimiento: {task.dueDate}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tasks;
