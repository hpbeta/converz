import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  background: linear-gradient(to bottom, #020617, #0f172a);
  color: white;
  flex-wrap: wrap;
  height: 800px;

  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    margin-top: 70px;
    height: 400px;
  }
`;

export const TextContent = styled.div`
  max-width: 700px;
  flex: 1;

  @media (max-width: 768px) {
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
    line-height: 40px;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
  width: 650px;
  color: #d0d6e5;
  line-height: 29px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1rem;
    text-align: center;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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

  &:hover {
    background-color: #e85a00;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
`;

export const CodeSnippet = styled.div`
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 1rem;
  width: 50%;

  pre {
    border-radius: 20px;
    background-color: #131b2e;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;

export const CodeHeader = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  z-index: 1;
  width: 670px;
  top: 194px;

  @media (max-width: 768px) {
    width: auto;
    top: 150px;
    padding: 8px 10px;
  }
`;

export const CodeHeaderRight = styled.div`
  color: #ccc;
  font-style: italic;
  margin-left: 260px;

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 0.8rem;
  }
`;
