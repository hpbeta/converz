import styled from "styled-components";

export const PortfolioSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, #1f2937 20%, #111827);
  position: relative;
`;

export const PortfolioWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 3xl;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;

  span {
    color: #4f8fce;
  }
`;

export const Paragraph = styled.p`
  color: #ffffff;
  width: 740px;
  margin: 0 auto;
  line-height: 28px;

  @media (max-width: 759px) {
    width: 350px;
  }
`;

export const PortfolioCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  width: 500px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  transition: transform 0.7s ease;
  filter: brightness(0.7);
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  ${Card}:hover & {
    color: #4f8fce;
  }
`;

export const CardDescription = styled.p`
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

export const ViewButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-left: 400px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background: #4f8fce;
  }
`;
