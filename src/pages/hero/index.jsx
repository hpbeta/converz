import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css"; //
import { FaArrowRight } from "react-icons/fa";

import {
  Button,
  CodeSnippet,
  Container,
  Description,
  TextContent,
  Title,
} from "./styles";
import { Header } from "../../pages/header";

export function LandingPage  ()  {
  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `
import React from 'react';

const LandingPage = () => {
  return (
    <div className="converz-container">
      <h1>converz</h1>
      <p>Transformando ideias em experiências digitais...</p>
      <Button primary>Comece agora</Button>
    </div>
  );
};

export default LandingPage;
  `;

  return (
    <>
      <Header />
      <Container id="inicio">
        <TextContent>
          <Title>
            Transforme sua <span>presença digital</span> com landing pages que
            convertem
          </Title>
          <Description>
            A converz ajuda empresas a conquistarem mais clientes com landing
            pages de alto impacto visual e performance otimizada.
          </Description>
          <Button
            href="https://wa.me/5531983295772"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
          >
            Iniciar projeto <FaArrowRight size={"23px"} />
          </Button>
        </TextContent>
        <CodeSnippet>
          <pre>
            <code ref={codeRef} className="language-jsx">
              {code}
            </code>
          </pre>
        </CodeSnippet>
      </Container>
    </>
  );
};

