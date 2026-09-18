import '../styles/navbar.css';

export default function Navbar({ setVistaActual }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => setVistaActual('inicio')}>
        🖨️ 3DPrintZone
      </div>

      <ul className="navbar-menu">
        <li onClick={() => setVistaActual('tipos')}>Tipos de impresión</li>
        <li onClick={() => setVistaActual('impresoras')}>Impresoras</li>
        <li onClick={() => setVistaActual('materiales')}>Materiales</li>
        <li onClick={() => setVistaActual('configuraciones')}>Configuraciones</li>
        <li>Posts</li>
      </ul>

      <div className="navbar-acciones">
        <button className="btn-texto">Iniciar sesión</button>
        <button className="btn-primario">Registrarse</button>
      </div>
    </nav>
  );
}