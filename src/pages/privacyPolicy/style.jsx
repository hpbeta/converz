import styled from "styled-components";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  color: #2d3748; /* cinza escuro */
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const List = styled.ul`
  margin-bottom: 1rem;
  padding-left: 1.25rem;
  list-style-type: disc;
`;

export const LinkStyled = styled.a`
  color: #3182ce; /* azul */
  text-decoration: underline;

  &:hover {
    color: #2c5282; /* azul escuro */
  }
`;

export const FooterNote = styled.p`
  font-size: 0.875rem;
  color: #a0aec0; /* cinza claro */
`;

export const Link = styled.a`
  background-color: #808080;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`