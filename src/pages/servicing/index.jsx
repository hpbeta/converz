import {
  BarChart,
  Code,
  Paintbrush,
  Rocket,
  Smartphone,
  Zap,
} from "lucide-react";
import {
  Button,
  Card,
  CardContainer,
  Container,
  DecorativeCircle,
  Grid,
  GridOverlay,
  Heading,
  IconWrapper,
  Paragraph,
  PulseBar,
  PulseBlock,
  Section,
  ServiceCard,
  Services,
  ServicesGrid,
  TitleArea,
  Wrapper,
} from "./styles";

const serviceItems = [
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Design UI/UX",
    description:
      "Criamos designs de landing pages impressionantes e intuitivos que capturam a essência da sua marca.",
    color: "linear-gradient(to right, #a855f7, #ec4899)",
    shadowColor: "rgba(168, 85, 247, 0.2)",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Desenvolvimento",
    description:
      "Transformamos designs em código limpo e bem estruturado para uma performance web excepcional.",
    color: "linear-gradient(to right, #3b82f6, #22d3ee)",
    shadowColor: "rgba(59, 130, 246, 0.2)",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Responsivo",
    description:
      "Todas as nossas landing pages são totalmente responsivas, garantindo uma experiência perfeita em qualquer dispositivo.",
    color: "linear-gradient(to right, #22c55e, #34d399)",
    shadowColor: "rgba(34, 197, 94, 0.2)",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Otimização",
    description:
      "Implementamos as melhores práticas para garantir que sua landing page converta visitantes em clientes.",
    color: "linear-gradient(to right, #fb923c, #facc15)",
    shadowColor: "rgba(251, 146, 60, 0.2)",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performance",
    description:
      "Otimizamos todos os aspectos para carregamento rápido e experiência suave em qualquer condição de rede.",
    color: "linear-gradient(to right, #ef4444, #ec4899)",
    shadowColor: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Manutenção",
    description:
      "Oferecemos suporte contínuo para garantir que sua landing page esteja sempre atualizada e funcionando perfeitamente.",
    color: "linear-gradient(to right, #f59e0b, #fbbf24)",
    shadowColor: "rgba(245, 158, 11, 0.2)",
  },
];

export function Servicing() {
  return (
    <Section id="servicos">
      <Container>
        <TitleArea>
          <Services>Nossos Serviços</Services>
          <h2>
            Transformando <span>ideias</span> em experiências digitais
          </h2>
          <p>
            Nossos serviços são projetados para criar landing pages que não
            apenas impressionam visualmente, mas também convertem visitantes em
            clientes.
          </p>
        </TitleArea>

        <ServicesGrid>
          {serviceItems.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper bg={service.color} shadow={service.shadowColor}>
                {service.icon}
              </IconWrapper>
              <h3
                style={{
                  color: "white",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: "#d1d5db" }}>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>

      <Wrapper>
        <Grid>
          <div>
            <Heading>Pronto para transformar sua presença online?</Heading>
            <Paragraph>
              Estamos aqui para ajudar sua empresa a se destacar com landing
              pages que não apenas parecem incríveis, mas também geram
              resultados reais.
            </Paragraph>
            <Button
              href="https://wa.me/5531983295772"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>

          <CardContainer>
            <Card>
              <GridOverlay />
              <div style={{ position: "relative", zIndex: 10 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  {[...Array(4)].map((_, i) => (
                    <PulseBlock key={i} delay={i * 0.2} />
                  ))}
                </div>
                <PulseBar />
              </div>
            </Card>
            <DecorativeCircle className="blue" />
            <DecorativeCircle className="orange" />
          </CardContainer>
        </Grid>
      </Wrapper>
    </Section>
  );
}
