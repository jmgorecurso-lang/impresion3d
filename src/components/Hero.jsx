import BuscadorImpresoras from './BuscadorImpresoras';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">Plataforma de calibración y perfiles 3D</span>

      <h1 className="hero-title">
        Encuentra la configuración exacta<br />
        para tu <span className="hero-title-accent">impresión 3D</span>
      </h1>

      <p className="hero-subtitle">
        Parámetros cinemáticos certificados, retracciones calibradas y curvas
        térmicas validadas para FDM, Resina SLA y Sinterizado SLS de grado industrial.
      </p>

      <BuscadorImpresoras />
    </section>
  );
}

export default Hero;