import { FaWhatsapp } from "react-icons/fa";
import { WhatsappWrapper } from "./styles";

export function WhatsappButton() {
  return (
    <WhatsappWrapper
      href="https://wa.me/5531983295772"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp />
    </WhatsappWrapper>
  );
}
