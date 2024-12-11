import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
import { COLORS } from '../constants';
import About from './About';
import Services from './Services';

import djSVG from '../assets/dj_man.svg';

const Main = () => {
  return (
    <MainWrapper>
      <BigLogoCont>
        <ImageContainer>
          <img src={djSVG} alt="" />
        </ImageContainer>
      </BigLogoCont>

      <About />
      <Services />
    </MainWrapper>
  );
};

const BigLogoCont = styled.section`
  display: flex;
  justify-content: center;
  background: hsl(345, 6.9%, 88.63%);
`;

const MainWrapper = styled.main`
  padding-bottom: 32px;
  background: ${COLORS.lightBrown};
`;

const ImageContainer = styled.div`
  width: 60%;

  & img {
    width: 100%;
    transform: translateY(-70px) translatex(-20px);
  }
`;

// const Services = styled.section`
//   min-height: 300px;
//   background: ${COLORS.secondary};
//   padding: 32px;
// `;

export default Main;
