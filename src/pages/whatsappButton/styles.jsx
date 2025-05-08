import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const WhatsappWrapper = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #25d366;
  color: white;
  padding: 16px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${pulse} 1.5s infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
