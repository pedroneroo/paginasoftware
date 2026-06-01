export default function Utilidades() {
  const uses = [
    "Acelerar processos manuais do seu dia a dia.",
    "Aumentar o faturamento da sua empresa ou projeto.",
    "Trabalhar de qualquer lugar do mundo com liberdade.",
    "Criar uma estrutura sólida e altamente escalável."
  ];

  return (
    <section className="usecases-section" id="ancora-utilidades">
      <h2 className="section-title-center">O que você será capaz de fazer?</h2>
      <p className="section-subtitle-center">Veja na prática as aplicações reais do nosso método.</p>
      <div className="usecases-grid">
        {uses.map((item, index) => (
          <div key={index} className="usecase-item">
            <span className="usecase-check">✓</span>
            <span className="usecase-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}