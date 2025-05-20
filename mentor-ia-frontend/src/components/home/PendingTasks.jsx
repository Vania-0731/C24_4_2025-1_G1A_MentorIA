import React from 'react';
import { Link } from 'react-router-dom';
import './PendingTasks.css';

const PendingTasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Investigación de Machine Learning',
      course: 'Tecnologías Emergentes',
      dueDate: '25 May, 2025',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Implementar API REST',
      course: 'Desarrollo de Aplicaciones Web',
      dueDate: '27 May, 2025',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Pruebas unitarias',
      course: 'Construcción y Pruebas de Software',
      dueDate: '29 May, 2025',
      priority: 'low'
    }
  ];
  
  return (
    <div className="pending-tasks">
      <h3 className="section-title">Tareas pendientes</h3>
      <div className="tasks-list">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <div className={`priority-indicator priority-${task.priority}`}></div>
            <div className="task-content">
              <h4 className="task-title">{task.title}</h4>
              <p className="task-course">{task.course}</p>
              <div className="task-due-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{task.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/tasks" className="view-all-btn">Ver todas las tareas</Link>
    </div>
  );
};

export default PendingTasks;
