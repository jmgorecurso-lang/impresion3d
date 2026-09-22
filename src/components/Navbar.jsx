// no se hace un import de CSS dentro de este archivo, ya está todo en el global.
import logo from '../assets/Imagenes/logoFondClaro.png';
function Navbar({setVistaActual}) {
  return (
    <nav className="navbar">
      <div className='navbar-logo' onClick={() =>setVistaActual}>
        <img src={logo} alt="logo" style={{ width: '250px' }} />
        </div>
      

      <ul className="navbar-menu">
        <li onClick={() => setVistaActual('inicio')}>Tipo de Impresión</li>
        <li onClick={() => setVistaActual('impresoras')}>Impresoras</li>
        <li onClick={() => setVistaActual('materiales')}>Materiales</li>
        <li onClick={() => setVistaActual('configuraciones')}>Configuraciones</li>
        <li className='navbar-item-deshabilitado'>Post</li>
      </ul>

      <div className="navbar-acciones">
        <button className="btn-texto">Iniciar sesión</button>
        <button className="btn-primario">Registrarse</button>
      </div>
    </nav>
  );
}

export default Navbar;