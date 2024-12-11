import styled from 'styled-components';
import djSVG from '../assets/dj_man.svg';

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
`;

const ImageContainer = styled.div`
  width: 60%;

  & img {
    width: 100%;
    transform: translateY(-70px) translatex(-20px);
  }
`;

export default BigLogo;
