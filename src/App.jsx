import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TipoImpd from './components/TipoImpresion';
import Printers from './components/Printers';

export default function App() {
  const [vista, setVista] = useState('inicio');

  const renderContenido = () => {
    switch (vista) {
      case 'inicio':
        return <Home alSeleccionarTipo={setVista} />;
      case 'filamento':
      case 'resina':
      case 'otros':
        return <TipoImpd tipo={vista} volver={() => setVista('inicio')} />;
      case 'impresoras':
        return <Printers />
      
      default:
        return <Home alSeleccionarTipo={setVista} />;
    }
  };

  return (
    <div>
      <Navbar setVistaActual={setVista}/>
      {renderContenido()}
    </div>
  );
}