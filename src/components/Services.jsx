import ServiceSection from './ServiceSection';

import weddingPic from '../assets/wedding.jpg';
import partyPic from '../assets/party.jpg';
import heartSVG from '../assets/hearts.svg';
import partySVG from '../assets/party.svg';
import styled from 'styled-components';
import { COLORS } from '../constants';

const Services = () => {
  return (
    <>
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

      <Separator />

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
    </>
  );
};

const Separator = styled.div`
  width: 80%;
  height: 4px;
  background: ${COLORS.primary};
  margin: 48px auto;
  border-radius: 50%;
`;

export default Services;
