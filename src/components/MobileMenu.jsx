import styled from 'styled-components';

const MobileMenu = ({ isOpen, setShowMobile }) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <Overlay isOpen={isOpen}>
      <CustomButton onClick={() => setShowMobile(false)}>
        <Wrapper>BUTTON</Wrapper>
      </CustomButton>
      <Content>
        <Navigation>
          <LinkWrapper>
            <a href="#about">Rólam</a>
            <a href="#services">Szolgáltatások</a>
            <a href="#accesories">Techinka</a>
            <a href="#contacts">Kapcsolat</a>
          </LinkWrapper>
        </Navigation>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 120vh;
  z-index: 4000;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(p) => (p.isOpen ? 'translateX(0)' : 'translateX(110%)')};
  transition: transform 250ms;
`;

const Content = styled.div`
  width: 400px;
`;

const Wrapper = styled.div`
  width: min-content;
`;

const CustomButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    display: block;
    width: min-content;
    font-size: 1.25rem;
    margin-bottom: 48px;
  }
`;

const LinkWrapper = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
`;

export default MobileMenu;
