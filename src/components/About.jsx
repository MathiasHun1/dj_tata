import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

const About = () => {
  return (
    <Wrapper id="about">
      <Card>
        <TextContainer>
          <Title>Üdvözöllek a zenei világomban!</Title>
          <Text>
            DJ-ként az a szenvedélyem, hogy visszahozzam a zene aranykorát. Legyen szó a 70-es évek funky hangulatáról,
            a 80-as évek ikonikus ritmusairól, vagy a 90-es évek felejthetetlen slágereiről. Célom, hogy minden eseményt
            nosztalgikus időutazássá varázsoljak. A kortalan retro klasszikusoktól a kedvenc modern slágerekig mindent
            megoldok.
          </Text>
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

  // @media (${QUERIES.phoneAndSmaller}) {
  //   text-align: center;
  // }
`;

const Title = styled.h2`
  @media (${QUERIES.phoneAndSmaller}) {
    margin-bottom: 32px;
  }
`;

const Text = styled.p``;

export default About;
