import { useState, useEffect } from 'react';

export default function Cabecalho() {
  const TEMPO_TOTAL_24H = 24 * 3600;

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedEndTime = localStorage.getItem('cronometro_fim_24h');
    const agora = Math.floor(Date.now() / 1000);

    if (savedEndTime) {
      const tempoRestante = parseInt(savedEndTime, 10) - agora;
      
      if (tempoRestante > 0) {
        return tempoRestante;
      }
    }

    const novoFim = agora + TEMPO_TOTAL_24H;
    localStorage.setItem('cronometro_fim_24h', novoFim.toString());
    return TEMPO_TOTAL_24H;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const getFormattedTime = () => {
    const horas = Math.floor(timeLeft / 3600);
    const minutos = Math.floor((timeLeft % 3600) / 60);
    const segundos = timeLeft % 60;

    return {
      horas: horas.toString().padStart(2, '0'),
      minutos: minutos.toString().padStart(2, '0'),
      segundos: segundos.toString().padStart(2, '0')
    };
  };

  const tempo = getFormattedTime();

  return (
    <header className="main-header">
      <div className="header-inside-container">
        
        <div className="header-text-group">
          <h1 className="brand-name">Bônus extra por tempo limitado!</h1>
          <p className="header-headline">Curso de japonês + Bônus</p>
        </div>

        <div className="countdown-box-wrapper">
          
          <div className="timer-square">
            <span className="timer-number">{tempo.horas}</span>
            <span className="timer-label">HORAS</span>
          </div>

          <div className="timer-square">
            <span className="timer-number">{tempo.minutos}</span>
            <span className="timer-label">MINUTOS</span>
          </div>

          <div className="timer-square">
            <span className="timer-number">{tempo.segundos}</span>
            <span className="timer-label">SEGUNDOS</span>
          </div>

        </div>

      </div>
    </header>
  );
}