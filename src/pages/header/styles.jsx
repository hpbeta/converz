import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: #0f172c;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  .dot {
    color: #e75b16;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #0f172c;
    flex-direction: column;
    text-align: center;
    padding: 1rem 0;
    margin: 0;
    transition: all 0.3s ease;
  }

  &.open {
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin: 0 20px;
  font-size: 18px;
  color: #cdcdd8;
  cursor: pointer;

  &:hover {
    color: #e75b16;
  }

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;

  span {
    height: 3px;
    background-color: #ffffff;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
