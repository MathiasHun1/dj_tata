import styled from 'styled-components';
import { QUERIES } from '../constants';
import { useEffect, useState } from 'react';

import NavLink from './NavLink';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //adjust the condition for percformance, check if scrolled up ?
  const controlHeader = () => {
    if (window.scrollY > 250 && window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  });

  return (
    <MainHeader className={`${show ? '' : 'hidden'}`}>
      <Side>
        <a href="#home" style={{ textDecoration: 'none', color: 'black' }}>
          <Logo>DJ TataMoto</Logo>
        </a>
      </Side>
      <Side>
        <Navigation>
          <NavLink href="#about">Rólam</NavLink>
          {/* <NavLink href="#services">Szolgáltatásaim</NavLink>
          <NavLink href="#accesories">Technika</NavLink>
          <NavLink href="#contacts">Kapcsolat</NavLink> */}
        </Navigation>
      </Side>
      <Spacer />
    </MainHeader>
  );
};

const MainHeader = styled.div`
  background: hsl(250 25% 95%);
  height: 66, 5px;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 10;
  opacity: 1;

  transition:
    transform 800ms,
    opacity 800ms;
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

// const NavLink = styled.a`
//   text-decoration: none;
//   color: black;
//   font-weight: 500;
//   z-index: 10;

//   &:hover {
//     cursor: pointer;
//   }
// `;

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
