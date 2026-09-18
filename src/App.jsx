import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Printers from './components/Printers';
import Materials from './components/Materials';
import Settings from './components/Settings';

export default function App() {
  const [vista, setVista] = useState('inicio'); 

  // Función auxiliar para decidir qué cuerpo de página mostrar
  const renderContenido = () => {
    switch (vista) {
      case 'inicio':
        return <Home alSeleccionarTipo={setVista} />;
      case 'filamento':
      case 'resina':
      case 'otros':
        return <Catalog tipo={vista} volver={() => setVista('inicio')} />;
      case 'impresoras':
        return <Printers />;
      case 'materiales':
        return <Materials />;
      case 'configuraciones':
        return <Settings />;
      default:
        return <Home alSeleccionarTipo={setVista} />;
    }
  };

  return (
    <div>
      {/* El Navbar siempre se queda visible arriba */}
      <Navbar setVistaActual={setVista} />

      {/* Aquí cambia el contenido dinámicamente */}
      {renderContenido()}
    </div>
  );
}