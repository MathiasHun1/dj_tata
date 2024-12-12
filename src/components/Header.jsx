import styled from 'styled-components';
import { QUERIES } from '../constants';

const Header = () => {
  return (
    <header>
      <MainHeader>
        <Side>
          <Logo>DJ TataMoto</Logo>
        </Side>
        <Side>
          <Navigation>
            <NavLink href="#about">Rólam</NavLink>
            <NavLink href="#services">Szolgáltatásaim</NavLink>
            <NavLink href="#accesories">Technika</NavLink>
            <NavLink href="#contacts">Kapcsolat</NavLink>
          </Navigation>
        </Side>
        <Spacer />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  background: hsl(250 25% 95%);
  display: flex;
  align-items: center;
  padding: 12px 24px;
`;

const Logo = styled.h1`
  margin-left: 100px;
  text-wrap: nowrap;

  @media (${QUERIES.tabletAndSmaller}) {
    margin-left: 32px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Spacer = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;
export default Header;
