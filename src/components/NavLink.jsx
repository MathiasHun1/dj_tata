import styled from 'styled-components';

const NavLink = ({ children }) => {
  return (
    <Wrapper>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: black;
  // font-weight: 500;
  z-index: 10;
  // overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.a`
  display: block;
  text-decoration: none;
  font-size: 1.125rem;
  color: black;
`;

const MainText = styled(Text)`
  &:hover {
    transform: translateY(-100%);
  }
`;

const HoverText = styled(Text)`
  font-weight: bold;
  position: absolute;
  bottom: -100%;
`;

export default NavLink;
