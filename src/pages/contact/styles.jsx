import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: 6rem 1rem;
  background: linear-gradient(to bottom, #0f172a, #1e293b, #0f172a);
  overflow: hidden;
`;

export const GradientLeft = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.3;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 33.33%;
    background: linear-gradient(to right, rgba(255, 165, 0, 0.1), transparent);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 33.33%;
    background: linear-gradient(to left, rgba(37, 99, 235, 0.1), transparent);
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: #60a5fa;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  margin-bottom: 2rem;

  span {
    background: linear-gradient(to right, #60a5fa, #2563eb);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  margin-bottom: 3rem;
`;

export const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #22c55e;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #16a34a;
  }
`;

export const DifferentialsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 30px;
`;

export const Differential = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.125rem;
`;

export const IconWrapper = styled.div`
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  padding: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
