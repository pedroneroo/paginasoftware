export default function Pricing() {
  const handleBuy = () => {
    window.open("https://seu-link-de-checkout.com", "_blank");
  };

  return (
    <section className="pricing-section">
      <div className="pricing-max-width">
        <h2 className="pricing-section-title">Garanta Seu Acesso Hoje</h2>
        <p className="pricing-subtitle">Tenha todas as ferramentas e mude seus resultados agora mesmo.</p>
        
        <div className="pricing-box">
          <p className="old-price">De R$ 497,00</p>
          <p className="price-prefix">Por apenas</p>
          <div className="main-price-box">
            12x R$ <span className="main-price-large">29,70</span>
            <span className="price-subtext">ou R$ 297,00 à vista</span>
          </div>
          
          <button onClick={handleBuy} className="btn-cta-buy">
            Quero Começar Agora!
          </button>
          
          <p className="secure-purchase">🔒 Compra 100% Segura e Criptografada</p>
        </div>
      </div>
    </section>
  );
}