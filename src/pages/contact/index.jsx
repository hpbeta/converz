import {
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaWhatsapp,
} from "react-icons/fa";
import {
  Badge,
  Container,
  Differential,
  DifferentialsList,
  GradientLeft,
  IconWrapper,
  Paragraph,
  Section,
  Title,
  WhatsAppButton,
} from "./styles";

export function ContactSection() {
  return (
    <Section id="contato">
      <GradientLeft />
      <Container>
        <div>
          <Badge>Entre em Contato</Badge>
          <Title>
            Vamos <span>conversar</span> sobre seu projeto
          </Title>
          <Paragraph>
            Estamos prontos para transformar sua visão em uma landing page de
            alto impacto. Entre em contato para começarmos a trabalhar juntos.
          </Paragraph>
          <WhatsAppButton
            href="https://wa.me/5531983295772"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
          >
            <FaWhatsapp size={20} />
            Fale conosco no WhatsApp
          </WhatsAppButton>
        </div>

        <DifferentialsList>
          <Differential>
            <IconWrapper>
              <FaPaintBrush size={24} />
            </IconWrapper>
            Design personalizado para sua marca
          </Differential>
          <Differential>
            <IconWrapper>
              <FaChartLine size={24} />
            </IconWrapper>
            Foco em conversão e resultados
          </Differential>
          <Differential>
            <IconWrapper>
              <FaCode size={24} />
            </IconWrapper>
            Código limpo e otimizado
          </Differential>
          <Differential>
            <IconWrapper>
              <FaMobileAlt size={24} />
            </IconWrapper>
            Design responsivo para todos os dispositivos
          </Differential>
        </DifferentialsList>
      </Container>
    </Section>
  );
}
