import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  background: linear-gradient(to bottom, #020617, #0f172a);
  color: white;
  flex-wrap: wrap;
  min-height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;
  }
`;

export const TextContent = styled.div`
  max-width: 700px;
  flex: 1;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 65px;
  font-weight: 700;
  line-height: 70px;

  span {
    background: linear-gradient(
      90deg,
      rgba(255, 100, 100, 1),
      rgba(100, 200, 255, 1)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 45px;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  color: #d0d6e5;
  line-height: 29px;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: linear-gradient(to right, #ffa500, #ff8c00);
  color: white;
  padding: 15px;
  border: none;
  font-size: 19px;
  cursor: pointer;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  margin-top: 30px;
  transition: 0.3s;

  &:hover {
    background-color: #e85a00;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }
`;

export const CodeSnippet = styled.div`
  color: white;
  width: 100%;
  max-width: 700px;
  font-family: monospace;
  font-size: 1rem;
  position: relative;

  pre {
    background-color: #131b2e;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow-x: auto;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const CodeHeader = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  position: absolute;
  top: -45px;
  left: 20px;
  right: 20px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

export const CodeHeaderRight = styled.div`
  color: #ccc;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;