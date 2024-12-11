import styled from 'styled-components';

import { COLORS } from '../constants';
import About from './About';
import ServiceSection from './ServiceSection';

import djSVG from '../assets/dj_man.svg';
import weddingPic from '../assets/wedding.jpg';
import partyPic from '../assets/party.jpg';
import heartSVG from '../assets/hearts.svg';
import partySVG from '../assets/party.svg';

const Main = () => {
  return (
    <MainWrapper>
      <BigLogoCont>
        <ImageContainer>
          <img src={djSVG} alt="" />
        </ImageContainer>
      </BigLogoCont>
      <Section>
        <About />
      </Section>
      <ServiceSection
        imageSource={weddingPic}
        svgSource={heartSVG}
        cardSize={'large'}
        cardText={'Esküvőre'}
        direction={'row'}>
        <h3>A felejthetetlen pillanatokért</h3>
        <br />
        <p>
          A Dj Tatamoto-nál a kivételes zene és szórakoztatás biztosítására specializálódtam, kifejezetten kisebb
          esküvők számára. Jól tudom, milyen fontos a tökéletes hangulat megteremtése a különleges napotokhoz. A
          tervezésben szorosan együttműködök veletek, hogy egyedi stílusotok és preferenciáitokat tükröző lejátszási
          listát állítsak össze, ezzel biztosítva, hogy esküvőtök emlékezetes és szórakoztató legyen Nektek, és minden
          vendég számára. Ünnepeljük együtt a szerelmet a tökéletes zenei aláfestéssel!
        </p>
      </ServiceSection>
      <ServiceSection
        imageSource={partyPic}
        svgSource={partySVG}
        cardSize={'large'}
        cardText={'Rendezvényre'}
        direction={'reverse'}>
        <h3>Hogy nagyot szóljon a buli</h3>
        <br />
        <p>
          A DJ Tatamoto-nál a különleges zene és felejthetetlen hangulat megteremtésére specializálódtam, legyen szó
          szilveszteri buliról, születésnapról vagy céges eseményről. Fontos számomra, hogy az est minden pillanata
          emlékezetes legyen. Együtt dolgozva alakítjuk ki a zenei programot, amely teljes mértékben tükrözi az
          elképzeléseiteket és az esemény jellegét. Garantálom, hogy a vendégek jól szórakoznak, és a buli valóban
          különleges élménnyé válik. Ünnepeljünk együtt a legjobb dallamokkal és fantasztikus energiával!
        </p>
      </ServiceSection>
      <Services></Services>
    </MainWrapper>
  );
};

const BigLogoCont = styled.section`
  display: flex;
  justify-content: center;
  background: hsl(345, 6.9%, 88.63%);
`;

const Section = styled.div``;

const MainWrapper = styled.main`
  padding-bottom: 32px;
`;

const ImageContainer = styled.div`
  width: 60%;

  & img {
    width: 100%;
    transform: translateY(-70px) translatex(-20px);
  }
`;

const Services = styled.section`
  min-height: 300px;
  background: ${COLORS.secondary};
  padding: 32px;
`;

export default Main;
