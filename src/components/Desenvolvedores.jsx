import fotoAirton from '../assets/airton.jpg';
import fotoPedro from '../assets/pedro.jpg';
export default function Desenvolvedores() {

  const devs = [
    {
      nome: "Airton Dias Júnior",
      curso: "Tecnologia em Sistemas pra Internet",
      foto: fotoAirton,
      funcao: "Desenvolvedor Frontend e Backend"
    },
    {
      nome: "Pedro Henrique Bastista Barbier",
      curso: "Tecnologia em Sistemas pra Internet",
      foto: fotoPedro,
      funcao: "Desenvolvedor Frontend e Backend"
    }
  ];

  return (
    <section className="devs-section">
      <div className="devs-container">
        <h2 className="devs-title">Quem Desenvolveu Este Projeto?</h2>
        <p className="devs-subtitle">Trabalho prático desenvolvido para a matéria de Teste de Software.</p>
        
        <div className="devs-grid">
          {devs.map((dev, index) => (
            <div key={index} className="dev-card">
              <div className="dev-avatar-wrapper">
                <img src={dev.foto} alt={dev.nome} className="dev-avatar" />
              </div>
              <h3 className="dev-name">{dev.nome}</h3>
              <p className="dev-course">🎓 {dev.curso}</p>
              <span className="dev-badge">{dev.funcao}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}