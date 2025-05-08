import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0f172a;
  color: white;
  padding-top: 4rem;
  padding-bottom: 2rem;
  position: relative;
  overflow: hidden;
`;

export const DotsPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.05;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      circle at 20px 20px,
      white 2px,
      transparent 0
    );
    background-size: 40px 40px;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const Logo = styled.a`
  font-size: 1.875rem;
  font-weight: 700;
  display: inline-block;
  color: white;
  text-decoration: none;
`;

export const LogoDot = styled.span`
  color: #ff8a65;
`;

export const LogoUnderline = styled.div`
  height: 0.125rem;
  width: 4rem;
  background: linear-gradient(to right, #ff8a65, transparent);
  margin-top: 0.25rem;
`;

export const CompanyDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

export const SocialIcon = styled.div`
  width: 1rem;
  height: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: white;
`;

export const OrangeTitleUnderline = styled.div`
  height: 0.125rem;
  width: 2.5rem;
  background-color: #ff8a65;
  margin-top: 0.25rem;
  position: absolute;
  left: 0;
`;

export const BlueTitleUnderline = styled(OrangeTitleUnderline)`
  background-color: #3b82f6;
`;

export const GradientTitleUnderline = styled(OrangeTitleUnderline)`
  background: linear-gradient(to right, #ff8a65, #3b82f6);
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
`;

export const LinkListItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled.a`
  color: #94a3b8;
  transition: color 0.3s;
  position: relative;
  display: inline-block;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const LinkPrefix = styled.span`
  transition: color 0.3s;

  ${StyledLink}:hover & {
    color: #ff8a65;
  }
`;

export const LinkUnderline = styled.span`
  display: block;
  max-width: 0;
  height: 0.125rem;
  background-color: #ff8a65;
  transition: all 0.5s;

  ${StyledLink}:hover & {
    max-width: 100%;
  }
`;

export const BluePrefix = styled(LinkPrefix)`
  ${StyledLink}:hover & {
    color: #3b82f6;
  }
`;

export const BlueLinkUnderline = styled(LinkUnderline)`
  background-color: #3b82f6;
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;
    border-color: #ff8a65;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right, #ff8a65, #ffa726);
  color: white;
  padding: 0.375rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const FormDisclaimer = styled.p`
  font-size: 0.75rem;
  color: #64748b;
`;

export const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Copyright = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: #64748b;
  font-size: 0.875rem;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
