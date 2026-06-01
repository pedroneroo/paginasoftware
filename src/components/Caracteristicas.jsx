import { CheckCircle, Star, Shield, Zap, Target, Award } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Zap size={28} />, title: "Entrega Rápida", desc: "Tenha acesso a todo o ecossistema de forma instantânea." },
    { icon: <Target size={28} />, title: "Foco no Resultado", desc: "Sem enrolação. Direto ao ponto que te traz retorno." },
    { icon: <Shield size={28} />, title: "Suporte Premium", desc: "Equipe dedicada para tirar suas dúvidas em até 2 horas." },
    { icon: <Star size={28} />, title: "Material Didático", desc: "Apostilas, resumos e planilhas prontas para download." },
    { icon: <Award size={28} />, title: "Certificado Incluso", desc: "Valorize seu currículo com nossa certificação válida." },
    { icon: <CheckCircle size={28} />, title: "Comunidade VIP", desc: "Networking ativo com profissionais do mesmo nicho." },
  ];

  return (
    <section className="features-section">
      <h2 className="section-title-center">Diferenciais do Produto</h2>
      <div className="features-grid">
        {features.map((feat, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon-wrapper">{feat.icon}</div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}