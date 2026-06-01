export default function Certifications() {
  const badges = [
    { id: 1, title: "Garantia de 7 Dias", desc: "Risco zero ou seu dinheiro de volta" },
    { id: 2, title: "Satisfação Garantida", desc: "98% de aprovação dos alunos" },
    { id: 3, title: "Ambiente 100% Seguro", desc: "Dados criptografados e protegidos" },
  ];

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        {badges.map(badge => (
          <div key={badge.id} className="badge-item">
            <div className="badge-icon-box">🛡️</div>
            <div>
              <h4 className="badge-title">{badge.title}</h4>
              <p className="badge-desc">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}