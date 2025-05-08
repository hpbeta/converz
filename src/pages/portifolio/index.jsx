import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  Paragraph,
  PortfolioCardContainer,
  PortfolioSection,
  PortfolioWrapper,
  Title,
  ViewButton,
} from "./styles";
import luisa from "../../assets/luisa.png";

const portfolioItem = [
  {
    id: 1,
    title: "Luisa Fernandez",
    description: "Landing page para psicóloga Luisa Fernandez",
    image: luisa,
  },
];

export function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioWrapper>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <Title>
            Nossos <span>projetos</span> recentes
          </Title>
          <Paragraph>
            Explore nossa coleção de landing pages que ajudaram empresas a
            aumentar sua presença online e taxas de conversão.
          </Paragraph>
        </div>

        <PortfolioCardContainer>
          {portfolioItem.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <ViewButton
                  href="https://landingpage-luisa.vercel.app/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </ViewButton>
              </CardContent>
            </Card>
          ))}
        </PortfolioCardContainer>
      </PortfolioWrapper>
    </PortfolioSection>
  );
}
