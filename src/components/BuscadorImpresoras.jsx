import { useState } from 'react';
import catalogo from '../data/catalogoImpresoras.json';
import '../styles/BuscadorImpresoras.css';

function BuscadorImpresoras() {
  const [busqueda, setBusqueda] = useState('');

  const textoBusqueda = busqueda.trim().toLowerCase();

  const resultados = catalogo.filter((item) => {
    if (textoBusqueda === '') return true;

    return Object.values(item).some((valor) =>
      String(valor).toLowerCase().includes(textoBusqueda)
    );
  });

  return (
    <section className="buscador">
      <h2>Buscar impresoras</h2>

      <input
        type="text"
        placeholder="Buscar cualquier dato..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="barra-busqueda"
      />

     <div className="resultados">
  {textoBusqueda !== '' &&
    resultados.map((item) => (
      <div key={item.modelo}>
        <strong>{item.modelo}</strong> — {item.marca} ({item.proceso} · {item.subtipo})
      </div>
    ))}
</div>
    </section>
  );
}

export default BuscadorImpresoras;