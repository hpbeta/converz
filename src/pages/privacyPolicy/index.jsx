import { Container, FooterNote, LinkStyled, List, Paragraph, Subtitle, Title } from "./style";

export function PrivacyPolicy() {
  return (
    <Container>
      <Title>Política de Privacidade</Title>

      <Paragraph>
        Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você utiliza nosso site <strong>Converz</strong>.
      </Paragraph>

      <Subtitle>1. Informações que coletamos</Subtitle>
      <Paragraph>
        Podemos coletar informações pessoais identificáveis, como nome, e-mail, telefone e outras que você fornece voluntariamente por meio de formulários ou interações no site.
      </Paragraph>

      <Subtitle>2. Uso das informações</Subtitle>
      <Paragraph>As informações coletadas são utilizadas para:</Paragraph>
      <List>
        <li>Entrar em contato com você</li>
        <li>Melhorar nossos serviços</li>
        <li>Enviar comunicações e atualizações, se autorizado</li>
      </List>

      <Subtitle>3. Compartilhamento de dados</Subtitle>
      <Paragraph>
        Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou necessário para a prestação do serviço solicitado.
      </Paragraph>

      <Subtitle>4. Cookies</Subtitle>
      <Paragraph>
        Utilizamos cookies para melhorar a experiência do usuário. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
      </Paragraph>

      <Subtitle>5. Segurança</Subtitle>
      <Paragraph>
        Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.
      </Paragraph>

      <Subtitle>6. Seus direitos</Subtitle>
      <Paragraph>
        Você pode solicitar acesso, correção ou exclusão de seus dados pessoais entrando em contato conosco.
      </Paragraph>

      <Subtitle>7. Contato</Subtitle>
      <Paragraph>
        Em caso de dúvidas, entre em contato pelo e-mail: <LinkStyled href="mailto:contato@converz.com">converz16.l@gmail.com</LinkStyled>
      </Paragraph>

      <FooterNote>Última atualização: 15 de maio de 2025</FooterNote>
    </Container>
  );
}