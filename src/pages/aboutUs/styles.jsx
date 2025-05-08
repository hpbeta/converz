import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, #0f172a, #1e293b, #0f172a);
  position: relative;
  overflow: hidden;
`;

export const Container = styled.section`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  color: #f97316;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  width: 650px;

  margin-bottom: 2rem;

  span {
    background: linear-gradient(to right, #f97316, #fbbf24);
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    width: 350px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  color: #d1d5db;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  line-height: 30px;

  @media (max-width: 768px) {
    width: 350px;
    text-align: center;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  margin-bottom: 20px;
`;

export const CheckWrapper = styled.div`
  background: rgba(249, 115, 22, 0.2);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Approach = styled.h3`
  margin-bottom: 10px;
`;

export const ImageWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainImage = styled.img`
  border-radius: 1rem;
  width: 630px;
  height: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

export const FloatCard = styled.div`
  position: absolute;
  z-index: 20;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: float 6s ease-in-out infinite;
  ${({ position }) => position}
`;

export const ApproachGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 6rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ApproachCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-0.5rem);
  }
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: ${({ bg }) => bg};
`;
