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
            <NavLink href="">Rólam</NavLink>
            <NavLink href="">Szolgáltatásaim</NavLink>
            <NavLink href="">Technika</NavLink>
            <NavLink href="">Kapcsolat</NavLink>
          </Navigation>
        </Side>
        <Spacer />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  background: hsl(250 25% 95%);
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
