import { useState } from "react";
import catalogo from '../data/catalogoImpresoras.json';
// importamos catalogo del json

const procesos = ['Todos', 'Filamento', 'Resina', 'Otros'];
// Carga todas las imágenes de la carpeta de golpe, como un objeto { 'ruta': url }
const imagenesModulo = import.meta.glob('../assets/Imagenes/impresoras/*', {
  eager: true,
  import: 'default',
});
// Convertimos las rutas completas en un mapa por nombre de archivo:
// { 'bambu-lab-a1.jpg': '/assets/bambu-lab-a1-abc123.jpg' }
const imagenesPorNombre = Object.fromEntries(
  Object.entries(imagenesModulo).map(([ruta, url]) => [
    ruta.split('/').pop(),
    url,
  ])
);

export default function Printers() {
  const [filtro, setFiltro] = useState('todos');
  const impresorasFiltradas =
    filtro === 'todos'
      ? catalogo
      : catalogo.filter((imp) => imp.proceso === filtro);

      
  return (
    <div className="printers">
      <h1>🖨️ Catálogo General de Impresoras</h1>
      <p>Aquí se mostrará la lista completa de maquinaria disponible, especificaciones técnicas y comparativas.</p>

      <div className="printers-filtros">
        {procesos.map((p) => (
          <button
            key={p}
            className={`chip ${filtro === p ? 'chip-activo' : ''}`}
            onClick={() => setFiltro(p)}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="printers-grid">
        {impresorasFiltradas.map((imp) => (
        <article key={imp.modelo} className="printer-tarjeta">
          <div className="printer-imagen">
            {imagenesPorNombre[imp.imagen] ?( 
              <img src={imagenesPorNombre[imp.imagen]} alt={imp.modelo} />
            ):(
               <span className="printer-imagen-placeholder">🖨️</span>
            )}
          </div>
           <div className="printer-info">
          <span className="printer-proceso-badge">{imp.proceso}</span>
          <h3>{imp.modelo}</h3>
          <p className="printer-marca">{imp.marca}</p>
          <p className="printer-subtipo">{imp.subtipo}</p>
          </div>
        </article>
       ) )}
      </div>


    </div>
  );
}