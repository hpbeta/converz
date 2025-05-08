import { useState } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  NavList,
  HamburgerIcon,
} from "./styles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          Converz<span className="dot">.</span>
        </Logo>
        <HamburgerIcon onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
        <NavList className={isMenuOpen ? "open" : ""}>
          <NavItem>
            <a href="#inicio">Início</a>
          </NavItem>
          <NavItem>
            <a href="#servicos">Serviços</a>
          </NavItem>
          <NavItem>
            <a href="#portfolio">Portfólio</a>
          </NavItem>
          <NavItem>
            <a href="#sobre">Sobre</a>
          </NavItem>
          <NavItem className="contact">
            <a href="#contato">Contato</a>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}
