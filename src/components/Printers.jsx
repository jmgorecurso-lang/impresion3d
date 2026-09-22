import { useState } from "react";
import catalogo from '../data/catalogoImpresoras.json';
// importamos catalogo del json

const procesos = ['Todos', 'Filamento', 'Resina', 'Otros'];

export default function Printers() {
  const [filtro, setFiltro] = useState('Todos');
  const impresorasFiltradas =
    filtro === 'Todos'
      ? catalogo
      : catalogo.filter((imp) => imp.proceso === filtro);

      console.log('filtro:', filtro, 'resultados:', impresorasFiltradas);

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
          <span className="printer-proceso-badge">{imp.proceso}</span>
          <h3>{imp.modelo}</h3>
          <p className="printer-marca">{imp.marca}</p>
          <p className="printer-subtipo">{imp.subtipo}</p>
        </article>
       ) )}
      </div>


    </div>
  );
}