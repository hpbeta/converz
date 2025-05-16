import { Container, FooterNote, LinkStyled, Paragraph, Subtitle, Title } from "./styles";



export function TermsOfUse() {
  return (
    <Container>
      <Title>Termos de Uso</Title>

      <Paragraph>
        Ao acessar e utilizar o site <strong>Converz</strong>, você concorda com os termos e condições descritos abaixo. Caso não concorde, recomendamos que não utilize nossos serviços.
      </Paragraph>

      <Subtitle>1. Uso do site</Subtitle>
      <Paragraph>
        O site destina-se à apresentação de informações e serviços. É proibido usar o site para fins ilegais ou que possam prejudicar terceiros.
      </Paragraph>

      <Subtitle>2. Propriedade intelectual</Subtitle>
      <Paragraph>
        Todo o conteúdo do site, incluindo textos, imagens, logos e código-fonte, é protegido por direitos autorais e não pode ser copiado ou distribuído sem autorização.
      </Paragraph>

      <Subtitle>3. Limitação de responsabilidade</Subtitle>
      <Paragraph>
        Nos isentamos de qualquer responsabilidade por danos decorrentes do uso do site, incluindo interrupções, erros ou perda de dados.
      </Paragraph>

      <Subtitle>4. Alterações nos termos</Subtitle>
      <Paragraph>
        Reservamo-nos o direito de alterar estes termos a qualquer momento. As mudanças passam a valer após a publicação no site.
      </Paragraph>

      <Subtitle>5. Contato</Subtitle>
      <Paragraph>
        Para dúvidas sobre estes termos, entre em contato através do e-mail: <LinkStyled href="mailto:contato@converz.com">converz16.l@gmail.com</LinkStyled>
      </Paragraph>

      <FooterNote>Última atualização: 15 de maio de 2025</FooterNote>
    </Container>
  );
}