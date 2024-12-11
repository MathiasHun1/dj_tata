import styled from 'styled-components';
import djSVG from '../assets/dj_man.svg';

const Main = () => {
  return (
    <MainWrapper>
      <BigLogoCont>
        <ImageContainer>
          <img src={djSVG} alt="" />
        </ImageContainer>
      </BigLogoCont>

      <Section>
        <AboutWrapper>
          <Card>
            <TextContainer>
              <h2>Üdvözöllek a zene világomban!</h2>
              <p>
                DJ-ként az a szenvedélyem, hogy visszahozzam a zene aranykorát. Legyen szó a 70-es évek funky
                hangulatáról, a 80-as évek ikonikus ritmusairól, vagy a 90-es évek felejthetetlen slágereiről. Célom,
                hogy minden eseményt nosztalgikus időutazássá varázsoljak. A kortalan retro klasszikusoktól a kedvenc
                modern slágerekig mindent megoldok.
              </p>
            </TextContainer>
          </Card>
        </AboutWrapper>
      </Section>
      <ServicesWrapper></ServicesWrapper>
      <Section></Section>
    </MainWrapper>
  );
};

const BigLogoCont = styled.section`
  display: flex;
  justify-content: center;
  background: hsl(345, 6.9%, 88.63%);
`;

const Section = styled.div``;

const MainWrapper = styled.main``;

const ImageContainer = styled.div`
  width: 60%;

  & img {
    width: 100%;
    transform: translateY(-70px) translatex(-20px);
  }
`;

const AboutWrapper = styled.article`
  background: hsl(36 58% 20%);
  display: flex;
  justify-content: center;
  padding: 26px;
  padding-top: 150px;
  margin-top: calc(-15rem);
`;

const Card = styled.div`
  width: clamp(500px, 70%, 900px);
`;

const TextContainer = styled.div`
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: justify;
`;

const ServicesWrapper = styled.div`
  height: 300px;
`;

export default Main;
