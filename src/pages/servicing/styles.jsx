import styled from "styled-components";

export const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 96px;
  background: linear-gradient(to bottom, #020617, #0f172a, #020617);
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const TitleArea = styled.div`
  max-width: 48rem;
  margin: 0 auto 4rem;
  text-align: center;

  span {
    color: #fb923c;
  }

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;

    span {
      color: #fb923c;
    }
  }

  p {
    font-size: 1.125rem;
    color: #d1d5db;
    line-height: 28px;
  }
`;

export const Services = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 14px;
  color: #e75b16;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }
`;

export const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  color: white;
  ${({ bg, shadow }) => `
    background: ${bg};
    box-shadow: 0 4px 20px ${shadow};
  `}
`;

export const Wrapper = styled.div`
  margin-top: 80px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: linear-gradient(to right, #1e293b, #0f172a);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  color: #d1d5db;
  margin-bottom: 24px;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  background: linear-gradient(to right, #e75b16, #f59e0b);
  color: white;
  font-weight: 500;
  border-radius: 12px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const CardContainer = styled.div`
  position: relative;
`;

export const Card = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

export const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
      0deg,
      rgba(30, 41, 59, 0.3),
      rgba(30, 41, 59, 0.3) 1px,
      transparent 1px,
      transparent 20px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(30, 41, 59, 0.3),
      rgba(30, 41, 59, 0.3) 1px,
      transparent 1px,
      transparent 20px
    );
`;

export const PulseBlock = styled.div`
  height: 64px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  animation: pulse 1.5s infinite;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }
`;

export const PulseBar = styled.div`
  margin-top: 16px;
  width: 75%;
  height: 40px;
  background: linear-gradient(to right, #e75b16, #f59e0b);
  border-radius: 8px;
  opacity: 0.8;
`;

export const DecorativeCircle = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  filter: blur(32px);
  z-index: 0;

  &.blue {
    top: -16px;
    right: -16px;
    background-color: rgba(59, 130, 246, 0.2);
  }

  &.orange {
    bottom: -16px;
    left: -16px;
    background-color: rgba(231, 91, 22, 0.2);
  }
`;
