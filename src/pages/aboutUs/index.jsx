import { BrainCircuit, Check, Code2, LineChart, Settings } from "lucide-react";
import {
  Approach,
  ApproachCard,
  ApproachGrid,
  BenefitItem,
  CheckWrapper,
  Container,
  FloatCard,
  Grid,
  IconWrapper,
  ImageWrapper,
  MainImage,
  Paragraph,
  Section,
  Tag,
  Title,
} from "./styles";
import { DotsPattern } from "../Footer/styles";

export function AboutSection() {
  const benefits = [
    "Design personalizado para sua marca",
    "Foco em conversão e resultados",
    "Código limpo e otimizado",
    "Design responsivo para todos os dispositivos",
    "Suporte técnico contínuo",
  ];

  const steps = [
    {
      icon: <BrainCircuit color="#fff" size={32} />,
      title: "Descoberta",
      description:
        "Entendemos seus objetivos, público-alvo e necessidades específicas.",
      bg: "linear-gradient(to right, #8b5cf6, #a78bfa)",
    },
    {
      icon: <Settings color="#fff" size={32} />,
      title: "Planejamento",
      description:
        "Desenvolvemos uma estratégia e estrutura para sua landing page.",
      bg: "linear-gradient(to right, #3b82f6, #06b6d4)",
    },
    {
      icon: <Code2 color="#fff" size={32} />,
      title: "Desenvolvimento",
      description: "Transformamos designs em código limpo e bem estruturado.",
      bg: "linear-gradient(to right, #f97316, #fbbf24)",
    },
    {
      icon: <LineChart color="#fff" size={32} />,
      title: "Lançamento",
      description:
        "Monitoramos performance e otimizamos para máxima conversão.",
      bg: "linear-gradient(to right, #10b981, #22c55e)",
    },
  ];

  return (
    <Section id="sobre">
      <DotsPattern />
      <Container>
        <Grid>
          <div>
            <Tag>Sobre Nós</Tag>
            <Title>
              Por que escolher a <span>converz</span>
            </Title>
            <Paragraph>
              Na converz, estamos comprometidos em criar landing pages de alto
              impacto que não apenas impressionam visualmente, mas também geram
              resultados tangíveis para o seu negócio. Nossa abordagem combina
              design inovador, desenvolvimento técnico sólido e estratégias de
              conversão comprovadas.
            </Paragraph>

            <div style={{ marginBottom: "2.5rem" }}>
              {benefits.map((benefit, index) => (
                <BenefitItem key={index}>
                  <CheckWrapper>
                    <Check size={16} color="#f97316" />
                  </CheckWrapper>
                  {benefit}
                </BenefitItem>
              ))}
            </div>
          </div>

          <ImageWrapper>
            <MainImage
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Equipe converz"
            />

            <FloatCard position="top: 50%; left: -3rem; transform: translateY(-50%);">
              <BenefitItem>
                <CheckWrapper style={{ background: "#3b82f6" }}>
                  <BrainCircuit size={20} color="#60a5fa" />
                </CheckWrapper>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "white",
                    }}
                  >
                    Estratégia
                  </strong>
                  <span style={{ fontSize: "0.75rem", color: "#d1d5db" }}>
                    Baseada em dados
                  </span>
                </div>
              </BenefitItem>
            </FloatCard>

            <FloatCard position="bottom: -1.5rem; right: 2.5rem;">
              <BenefitItem>
                <CheckWrapper style={{ background: "#f97316" }}>
                  <Code2 size={20} color="#f97316" />
                </CheckWrapper>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      color: "white",
                    }}
                  >
                    Desenvolvimento
                  </strong>
                  <span style={{ fontSize: "0.75rem", color: "#d1d5db" }}>
                    Código otimizado
                  </span>
                </div>
              </BenefitItem>
            </FloatCard>
          </ImageWrapper>
        </Grid>

        <div
          style={{
            textAlign: "center",
            marginTop: "6rem",
            marginBottom: "4rem",
          }}
        >
          <Approach
            style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}
          >
            Nossa Abordagem
          </Approach>
          <p
            style={{
              color: "#d1d5db",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "25px",
            }}
          >
            Seguimos um processo comprovado para garantir que sua landing page
            atenda a todos os seus objetivos de negócio e gere resultados
            mensuráveis.
          </p>
        </div>

        <ApproachGrid>
          {steps.map((step, index) => (
            <ApproachCard key={index}>
              <IconWrapper bg={step.bg}>{step.icon}</IconWrapper>
              <h4
                style={{
                  color: "white",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                }}
              >
                {step.title}
              </h4>
              <p style={{ color: "#d1d5db" }}>{step.description}</p>
            </ApproachCard>
          ))}
        </ApproachGrid>
      </Container>
    </Section>
  );
}
