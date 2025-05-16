import { Link } from "react-router-dom";
import {
  BlueLinkUnderline,
  BluePrefix,
  BlueTitleUnderline,
  CompanyDescription,
  Copyright,
  DotsPattern,
  FooterBottom,
  FooterContainer,
  GridLayout,
  InnerContainer,
  LinkList,
  LinkListItem,
  LinkPrefix,
  LinkUnderline,
  Logo,
  LogoContainer,
  LogoDot,
  LogoUnderline,
  OrangeTitleUnderline,
  SectionTitle,
  SocialIcon,
  SocialLink,
  SocialLinks,
  StyledLink,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer id="contact">
      {/* Background dots pattern */}
      <DotsPattern />

      <InnerContainer>
        <GridLayout>
          <div>
            <LogoContainer>
              <Logo href="#">
                Converz<LogoDot>.</LogoDot>
                <LogoUnderline />
              </Logo>
            </LogoContainer>

            <CompanyDescription>
              Criamos landing pages que transformam visitantes em clientes.
              Design impactante, código otimizado e estratégias de conversão
              eficientes.
            </CompanyDescription>

            <SocialLinks>
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social, index) => (
                  <SocialLink key={index} href="#" aria-label={social}>
                    <SocialIcon>{/* Placeholder for icons */}</SocialIcon>
                  </SocialLink>
                )
              )}
            </SocialLinks>
          </div>

          <div>
            <SectionTitle>
              Links Rápidos
              <OrangeTitleUnderline />
            </SectionTitle>
            <LinkList>
              {["Início", "Serviços", "Portfólio", "Sobre", "Contato"].map(
                (link, index) => (
                  <LinkListItem key={index}>
                    <StyledLink
                      href={`#${
                        link === "Início" ? "home" : link.toLowerCase()
                      }`}
                    >
                      <LinkPrefix>#</LinkPrefix> {link}
                      <LinkUnderline />
                    </StyledLink>
                  </LinkListItem>
                )
              )}

              {/* Novos links para Política de Privacidade e Termos de Uso */}
              <LinkListItem>
                <StyledLink to="/privacy-policy" as={Link}>
                  <LinkPrefix>#</LinkPrefix> Política de Privacidade
                  <LinkUnderline />
                </StyledLink>
              </LinkListItem>
              <LinkListItem>
                <StyledLink to="/terms-of-use" as={Link}>
                  <LinkPrefix>#</LinkPrefix> Termos de Uso
                  <LinkUnderline />
                </StyledLink>
              </LinkListItem>
            </LinkList>
          </div>

          <div>
            <SectionTitle>
              Serviços
              <BlueTitleUnderline />
            </SectionTitle>
            <LinkList>
              {[
                "Design de Landing Page",
                "Desenvolvimento Web",
                "Design UI/UX",
                "Otimização de Conversão",
                "Manutenção",
              ].map((service, index) => (
                <LinkListItem key={index}>
                  <StyledLink href="#services">
                    <BluePrefix>#</BluePrefix> {service}
                    <BlueLinkUnderline />
                  </StyledLink>
                </LinkListItem>
              ))}
            </LinkList>
          </div>

          <div></div>
        </GridLayout>

        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Converz. Todos os direitos reservados.
          </Copyright>
        </FooterBottom>
      </InnerContainer>
    </FooterContainer>
  );
}