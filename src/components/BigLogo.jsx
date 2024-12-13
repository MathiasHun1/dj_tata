import styled from 'styled-components';
import djSVG from '../assets/dj_man.svg';
import { QUERIES } from '../constants';

const BigLogo = () => {
  return (
    <BigLogoCont>
      <ImageContainer>
        <img src={djSVG} alt="" />
      </ImageContainer>
    </BigLogoCont>
  );
};

const BigLogoCont = styled.section`
  display: flex;
  justify-content: center;
  background: hsl(345, 6.9%, 88.63%);
  height: 600px;
`;

const ImageContainer = styled.div`
  width: 650px;

  & img {
    width: 100%;
    transform: translateY(-70px) translatex(-20px);
  }

  @media (${QUERIES.phoneAndSmaller}) {
    width: 400px;
    margin-top: 140px;
  }
`;

export default BigLogo;
