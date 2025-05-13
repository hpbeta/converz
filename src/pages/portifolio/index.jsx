import {
  Card,
  CardContent,
  CardTitle,
  Paragraph,
  PortfolioCardContainer,
  PortfolioSection,
  PortfolioWrapper,
  Title,
  ViewProjectButton, // novo
} from './styles';

import luisa from '../../assets/luisa.png';
import karine from '../../assets/karine.png';

const portfolioItem = [
  {
    id: 1,
    title: 'Luisa Fernandez',
    description: 'Landing page para psicóloga Luisa Fernandez',
    image: luisa,
    link: 'https://landingpage-luisa.vercel.app/',
  },
  {
    id: 2,
    title: 'Karine Dias',
    description: 'Landing page para curso de redação enem Karine Dias',
    image: karine,
    link: 'https://karine-dias.vercel.app/', // substitua com o link correto depois
  },
];

export function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioWrapper>
        <Title>
          Projetos <span>realizados</span>
        </Title>

        <Paragraph>
          Aqui estão algumas landing pages desenvolvidas para profissionais e empresas que buscavam uma presença online de impacto.
        </Paragraph>

        <PortfolioCardContainer>
          {portfolioItem.map((item) => (
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <Paragraph>{item.description}</Paragraph>
                <ViewProjectButton href={item.link} target="_blank" rel="noopener noreferrer">
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