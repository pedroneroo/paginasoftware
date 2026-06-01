import { useState } from 'react';

export default function SecaoVideo({ onVideoComplete, isLocked }) {
  const [started, setStarted] = useState(false);

  // Função que faz a rolagem suave até a seção de utilidades
  const handleScrollToSection = () => {
    if (isLocked) {
      alert("Assista ao vídeo primeiro para liberar a página!");
      return;
    }
    const targetSection = document.getElementById('ancora-utilidades');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="video-section">
      
      {/* Grafismos de Pontinhos */}
      <div className="dots-graphic dots-top-left">
        <div>•••••</div><div>•••••</div><div>•••••</div><div>•••••</div>
      </div>

      <div className="dots-graphic dots-bottom-right">
        <div>•••••</div><div>•••••</div><div>•••••</div><div>•••••</div>
      </div>

      <div className="video-max-width video-container-wrapper">
        
        <div className="video-intro-text-box">
          <h2 className="video-main-headline">
            Aprenda japonês com resultados <span className="highlight-yellow">reais já na primeira semana</span> mesmo começando do absoluto zero.
          </h2>
          <p className="video-sub-headline">
            Se prepare para criar <span className="highlight-yellow">eficiência</span> no seu aprendizado!<br />
            Assista o vídeo abaixo e descubra.
          </p>
        </div>
        
        <div className="video-placeholder-box">
          <p style={{ color: '#94a3b8', marginBottom: '16px' }}>[Player de Vídeo Principal Aqui]</p>
          
          {!started ? (
            <button onClick={() => setStarted(true)} className="btn-play">
              Dar Play e Bloquear Site
            </button>
          ) : (
            <div>
              <p className="video-warning">⚡ Vídeo em execução. Assista até o fim para liberar a página.</p>
              <button onClick={onVideoComplete} className="btn-simulate-end">
                (Simular Fim do Vídeo para Teste)
              </button>
            </div>
          )}

          <div className="fake-progress-bar">
            <div className="fake-progress-fill"></div>
          </div>
        </div>

        <div className="video-cta-container">
          <button 
            onClick={handleScrollToSection} 
            className={`btn-video-cta ${isLocked ? 'btn-cta-disabled' : ''}`}
          >
            SIM! QUERO COMEÇAR
          </button>
        </div>

        {isLocked && (
          <p className="lock-disclaimer" style={{ color: '#94a3b8', marginTop: '16px' }}>
            * Assista ao vídeo para desbloquear os recursos e interações do site.
          </p>
        )}
      </div>
    </section>
  );
}