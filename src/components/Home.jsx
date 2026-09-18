import Hero from './Hero';
import imgFilamento from '../assets/Imagenes/filamento.png';
import imgResina from '../assets/Imagenes/resina.png';
import imgSls from '../assets/Imagenes/sls.png';

export default function Home({ alSeleccionarTipo }) {
  return (
    <div>
      <Hero />

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>

          <div onClick={() => alSeleccionarTipo('filamento')} style={cardStyle}>
            <img src={imgFilamento} alt="Filamento" style={{ width: '250px' }} />
            <h2>🧵 Filamento</h2>
            <p>Ideal para piezas mecánicas, prototipos rápidos y proyectos cotidianos (FDM).</p>
          </div>

          <div onClick={() => alSeleccionarTipo('resina')} style={cardStyle}>
            <img src={imgResina} alt="Resina" style={{ width: '250px' }} />
            <h2>💧 Resina Líquida</h2>
            <p>Perfecto para miniaturas, joyería y piezas que requieren máximo detalle (SLA).</p>
          </div>

          <div onClick={() => alSeleccionarTipo('otros')} style={cardStyle}>
            <img src={imgSls} alt="Otro" style={{ width: '250px' }} />
            <h2>🚀 Otros Tipos</h2>
            <p>Explora tecnologías industriales como SLS, polvo metálico y más.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1.5rem',
  width: '250px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
};