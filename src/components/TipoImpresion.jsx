//import { useState } from 'react';
import tipos from '../data/Tipos.json'

export default function TipoImpd({ tipo, volver }) {
  const info = tipos [tipo];

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={volver} style={{ marginBottom: '1rem', cursor: 'pointer' }}>← Volver al inicio</button>
      <h1>{info.nombre}</h1>

      <div style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}>
        <div>
          <h3>⚙️ Unos datos</h3>
          <ul>
            {info.descripcionCorta.map((imp, index) => <li key={index}>{imp}</li>)}
          </ul>
        </div>

        <div>
          <h3>🧪 Materiales comunes</h3>
          <ul>
            {info.materiales.map((mat, index) => <li key={index}>{mat}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
