import { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Como vou receber o acesso?", a: "Após a aprovação do pagamento, você receberá instantaneamente um e-mail com seus dados de login." },
    { q: "Por quanto tempo tenho acesso?", a: "O seu acesso é vitalício/anual, permitindo que você veja e reveja quando quiser." },
    { q: "Preciso de conhecimento prévio?", a: "Não, o método foi desenhado do absoluto zero até o nível avançado." },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-title-center">Perguntas Frequentes</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-trigger"
              >
                <span>{faq.q}</span>
                <ChevronDown style={{ transform: openIndex === index ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {openIndex === index && (
                <div className="faq-content">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="warranty-box">
          <ShieldCheck className="warranty-icon" />
          <div>
            <h3 className="warranty-title">Garantia Incondicional de 7 Dias</h3>
            <p className="warranty-desc">
              Fique tranquilo. Se por qualquer motivo você achar que o produto não é para você, basta solicitar o reembolso dentro do prazo de 7 dias e devolveremos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}