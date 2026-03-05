import React from 'react';

// Este componente recibe "props" (titulo y ejercicios) para ser reutilizable
function RoutineCard({ dia, grupoMuscular, ejercicios }) {
  return (
    <div className="card-rutina">
      <h3>{dia}</h3>
      <span className="badge">{grupoMuscular}</span>
      <ul>
        {ejercicios.map((ejercicio, index) => (
          <li key={index}>{ejercicio}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoutineCard;