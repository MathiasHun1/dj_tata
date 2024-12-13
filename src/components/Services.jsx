import ServiceSection from './ServiceSection';

import weddingPic from '../assets/wedding.jpg';
import partyPic from '../assets/party.jpg';
import heartSVG from '../assets/hearts.svg';
import partySVG from '../assets/party2.svg';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

const Services = () => {
  return (
    <Wrapper id="services">
      <ServiceSection
        imageSource={weddingPic}
        svgSource={heartSVG}
        cardSize={'large'}
        cardText={'Esküvőre'}
        direction={'row'}>
        <Title>A felejthetetlen pillanatokért</Title>
        <br />
        <p>
          A Dj Tatamoto-nál a kivételes zene és szórakoztatás biztosítására specializálódtam, kifejezetten kisebb
          esküvők számára. Jól tudom, milyen fontos a tökéletes hangulat megteremtése a különleges napotokhoz. A
          tervezésben szorosan együttműködök veletek, hogy egyedi stílusotok és preferenciáitokat tükröző lejátszási
          listát állítsak össze, ezzel biztosítva, hogy esküvőtök emlékezetes és szórakoztató legyen Nektek, és minden
          vendég számára. Ünnepeljük együtt a szerelmet a tökéletes zenei aláfestéssel!
        </p>
      </ServiceSection>

      <Separator />

      <ServiceSection
        imageSource={partyPic}
        svgSource={partySVG}
        cardSize={'large'}
        cardText={'Rendezvényre'}
        direction={'reverse'}>
        <Title>Hogy nagyot szóljon a buli</Title>
        <br />
        <p>
          A DJ Tatamoto-nál a különleges zene és felejthetetlen hangulat megteremtésére specializálódtam, legyen szó
          szilveszteri buliról, születésnapról vagy céges eseményről. Fontos számomra, hogy az est minden pillanata
          emlékezetes legyen. Együtt dolgozva alakítjuk ki a zenei programot, amely teljes mértékben tükrözi az
          elképzeléseiteket és az esemény jellegét. Garantálom, hogy a vendégek jól szórakoznak, és a buli valóban
          különleges élménnyé válik. Ünnepeljünk együtt a legjobb dallamokkal és fantasztikus energiával!
        </p>
      </ServiceSection>
    </Wrapper>
  );
};

const Separator = styled.div`
  width: 80%;
  height: 4px;
  background: ${COLORS.primary};
  margin: 48px auto;
  margin-top: 0;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;

  @media (${QUERIES.phoneAndSmaller}) {
    text-align: start;
  }
`;

export default Services;
