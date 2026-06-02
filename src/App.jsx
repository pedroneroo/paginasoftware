import { useState } from 'react';
import Cabecalho from './components/Header';
import SecaoVideo from './components/SecaoVideo';
import Certificacoes from './components/Certificacoes';
import PassosObjetivo from './components/PassosObjetivo';
import Caracteristicas from './components/Caracteristicas';
import Utilidades from './components/Utilidades';
import Depoimentos from './components/Feedbacks';
import SobreAutor from './components/SobreAutor';
import PerguntasFrequentes from './components/PerguntasFrequentes';
import SecaoVenda from './components/SecaoVenda';
import Desenvolvedores from './components/Desenvolvedores';
import Rodape from './components/Footer';
import BotaoWhatsapp from './components/WhatsappButton';

export default function App() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div>
      <Cabecalho />

      <SecaoVideo onVideoComplete={() => setIsLocked(false)} isLocked={isLocked} />

      <div className={isLocked ? 'content-hidden-zone' : 'content-visible-zone'}>
        <Certificacoes />

        <PassosObjetivo />

        <Caracteristicas />

        <Utilidades />

        <Depoimentos />

        <SobreAutor />

        <PerguntasFrequentes />

        <SecaoVenda />

        <Desenvolvedores />

        <Rodape />
      </div>

      <BotaoWhatsapp />
    </div>
  );
}