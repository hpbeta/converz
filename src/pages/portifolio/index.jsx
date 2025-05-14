import {
  Card,
  CardContent,
  CardTitle,
  Paragraph,
  PortfolioCardContainer,
  PortfolioSection,
  PortfolioWrapper,
  Title,
  ViewProjectButton,
} from "./styles";

import luisa from "../../assets/luisa.png";
import karine from "../../assets/karine.png";
import marketing from "../../assets/marketing.png";
import lyf from "../../assets/lyf.png";

const portfolioItem = [
  {
    id: 1,
    title: "LYF-SEG",
    description: "Landing page para uma empresa de segurança do trabalho",
    image: lyf,
    link: "https://lyf-seg-lp.vercel.app/",
  },

  {
    id: 2,
    title: "Karine Dias",
    description: "Landing page para curso de redação enem Karine Dias",
    image: karine,
    link: "https://karine-dias.vercel.app/",
  },
  {
    id: 3,
    title: "LB-Marketing",
    description: "Landing page para uma agência de marketing",
    image: marketing,
    link: "https://www.lbmarketing.com.br/",
  },

  {
    id: 4,
    title: "Luisa Fernandez",
    description: "Landing page para psicóloga Luisa Fernandez",
    image: luisa,
    link: "https://landingpage-luisa.vercel.app/",
  }
];

export function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioWrapper>
        <Title>
          Projetos <span>realizados</span>
        </Title>

        <Paragraph>
          Aqui estão algumas landing pages desenvolvidas para profissionais e
          empresas que buscavam uma presença online de impacto.
        </Paragraph>

        <PortfolioCardContainer>
          {portfolioItem.map((item) => (
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <Paragraph>{item.description}</Paragraph>
                <ViewProjectButton
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                </ViewProjectButton>
              </CardContent>
            </Card>
          ))}
        </PortfolioCardContainer>
      </PortfolioWrapper>
    </PortfolioSection>
  );
}
