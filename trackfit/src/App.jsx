import { useState } from 'react';
import RoutineCard from './components/RoutineCard';
import './App.css'; // Importaremos los estilos aquí

function App() {
  // ESTADOS (La memoria de la app)
  // Meta: 140g proteina, 15000 pasos
  const [proteina, setProteina] = useState(0);
  const [pasos, setPasos] = useState(0);

  // DATOS DE RUTINA (Esto podría venir de una Base de Datos después)
  const rutinas = [
    { dia: 'Día 1', grupo: 'Pecho / Tríceps', lista: ['Press Banca Plana', 'Press Inclinado', 'Extensiones Polea'] },
    { dia: 'Día 2', grupo: 'Espalda / Bíceps', lista: ['Dominadas', 'Remo con Barra', 'Curl Martillo'] },
    { dia: 'Día 3', grupo: 'Pierna (Cuádriceps)', lista: ['Sentadilla Libre', 'Prensa', 'Extensiones'] },
    { dia: 'Día 4', grupo: 'Hombro / Femoral', lista: ['Press Militar', 'Peso Muerto Rumano', 'Elevaciones Laterales'] },
  ];

  // FUNCIONES DE CONTROL
  const agregarProteina = () => setProteina(proteina + 25); // Suma un scoop
  const registrarCaminata = () => setPasos(pasos + 1000); // Suma 1km aprox

  return (
    <div className="app-container">
      <header>
        <h1>TrackFit 🏋️‍♂️</h1>
        <p>Doctrina Alexander: Control y Progreso</p>
      </header>

      {/* DASHBOARD DE METAS */}
      <section className="dashboard">
        <div className="stat-card">
          <h2>Proteína (Meta: 140g)</h2>
          <div className="progress-bar">
            <div style={{ width: `${(proteina / 140) * 100}%`, backgroundColor: '#3498db' }}></div>
          </div>
          <p className="numero-grande">{proteina}g</p>
          <button onClick={agregarProteina}>+ Añadir Scoop (25g)</button>
        </div>

        <div className="stat-card">
          <h2>Pasos (Meta: 15k)</h2>
          <div className="progress-bar">
            <div style={{ width: `${(pasos / 15000) * 100}%`, backgroundColor: '#2ecc71' }}></div>
          </div>
          <p className="numero-grande">{pasos}</p>
          <button onClick={registrarCaminata}>+ Registrar 1k Pasos</button>
        </div>
      </section>

      {/* SECCIÓN DE RUTINAS */}
      <section className="rutinas-grid">
        {rutinas.map((rutina, index) => (
          <RoutineCard 
            key={index} 
            dia={rutina.dia} 
            grupoMuscular={rutina.grupo} 
            ejercicios={rutina.lista} 
          />
        ))}
      </section>
    </div>
  );
}

export default App;