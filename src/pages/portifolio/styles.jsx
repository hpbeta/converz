import styled from 'styled-components';

export const PortfolioSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, #0F172A, #1E293B, #0F172A);
  overflow: hidden;
`;

export const PortfolioWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #FFFFFF;

  span {
    background: linear-gradient(to right, #FF8A65, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #CBD5E1;
  max-width: 42rem;
  margin: 0 auto 3rem;
`;

export const PortfolioCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: border 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 0.5rem;
`;

export const ViewProjectButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  background-color: #FF8A65;
  color: #fff;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7043;
  }
`;