import styled from 'styled-components';
import { COLORS } from '../constants';

const About = () => {
  return (
    <Wrapper id="about">
      <Card>
        <TextContainer>
          <h2>Üdvözöllek a zenei világomban!</h2>
          <p>
            DJ-ként az a szenvedélyem, hogy visszahozzam a zene aranykorát. Legyen szó a 70-es évek funky hangulatáról,
            a 80-as évek ikonikus ritmusairól, vagy a 90-es évek felejthetetlen slágereiről. Célom, hogy minden eseményt
            nosztalgikus időutazássá varázsoljak. A kortalan retro klasszikusoktól a kedvenc modern slágerekig mindent
            megoldok.
          </p>
        </TextContainer>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: ${COLORS.primary};
  display: flex;
  justify-content: center;
  padding: 26px;
  padding-top: 150px;
  padding-bottom: 80px;
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

export default About;
