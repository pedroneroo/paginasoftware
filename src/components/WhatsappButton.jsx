import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  const handleWhatsapp = () => {
    const phone = "5500999999999"; 
    const text = encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas.");
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <button onClick={handleWhatsapp} className="whatsapp-btn" aria-label="Contato via WhatsApp">
      <MessageCircle size={24} fill="white" />
    </button>
  );
}