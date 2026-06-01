export default function Steps() {
  const steps = [
    { step: "01", title: "Acesso Imediato", desc: "Receba seus dados de login logo após a confirmação do pagamento." },
    { step: "02", title: "Aplicação Prática", desc: "Siga o cronograma passo a passo desenhado para a sua rotina." },
    { step: "03", title: "Alcance o Objetivo", desc: "Colha os resultados definitivos em menos de 30 dias." },
  ];

  return (
    <section className="steps-section">
      <h2 className="section-title-center">Passos para o seu Objetivo</h2>
      <div className="steps-grid">
        {steps.map((item, index) => (
          <div key={index} className="step-card">
            <span className="step-number">{item.step}</span>
            <h3 className="step-title">{item.title}</h3>
            <p className="step-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}