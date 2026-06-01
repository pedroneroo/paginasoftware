export default function Feedbacks() {
  const reviews = [
    { name: "Lucas Silva", role: "Empreendedor", text: "Mudou completamente a minha visão de negócios. Em 2 semanas recuperei o investimento." },
    { name: "Mariana Costa", role: "Designer", text: "Excelente didática e suporte muito atencioso. Recomendo para todos da área." },
    { name: "Roberto Alves", role: "Freelancer", text: "Prático, direto e sem enrolação. Os bônus sozinhos já valem o preço." },
  ];

  return (
    <section className="feedbacks-section">
      <h2 className="section-title-center">Quem já testou e aprovou</h2>
      <div className="feedbacks-grid">
        {reviews.map((rev, index) => (
          <div key={index} className="feedback-card">
            <p className="feedback-text">"{rev.text}"</p>
            <div>
              <h4 className="feedback-name">{rev.name}</h4>
              <p className="feedback-role">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}