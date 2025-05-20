import React from 'react';
import Navbar from '../../components/common/Navbar';
import Sidebar from '../../components/common/Sidebar';
import './Rules.css';

const Rules = () => {
  const rulesList = [
    {
      id: 1,
      title: 'Respeto y Ética Académica',
      description: 'Mantener una conducta respetuosa hacia docentes, compañeros y personal administrativo. Evitar conductas que atenten contra la convivencia.'
    },
    {
      id: 2,
      title: 'Uso Responsable de la Plataforma',
      description: 'Utilizar los recursos y funcionalidades de MentorIA exclusivamente para fines educativos y de formación.'
    },
    {
      id: 3,
      title: 'Participación Activa y Responsable',
      description: 'Cumplir con las actividades, tareas y evaluaciones en los tiempos establecidos, fomentando el aprendizaje colaborativo.'
    },
    {
      id: 4,
      title: 'Confidencialidad y Protección de Datos',
      description: 'Respetar la privacidad de los usuarios y proteger la información personal y académica.'
    },
    {
      id: 5,
      title: 'Cumplimiento de Normativas Institucionales',
      description: 'Alinear el uso de la plataforma con las políticas y reglamentos institucionales vigentes.'
    }
  ];

  return (
    <div className="rules-page">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">
          <h1>Normas MentorIA</h1>
          <ul className="rules-list">
            {rulesList.map(rule => (
              <li key={rule.id} className="rule-item">
                <h3>{rule.title}</h3>
                <p>{rule.description}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Rules;
