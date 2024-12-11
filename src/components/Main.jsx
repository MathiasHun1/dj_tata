import styled from 'styled-components';

import { COLORS } from '../constants';
import About from './About';
import Services from './Services';
import BigLogo from './BigLogo';
import Accesories from './Accesories';
import Contacts from './Contacts';

const Main = () => {
  return (
    <MainWrapper>
      <BigLogo />

      <About />

      <Services />

      <Accesories />

      <Contacts />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding-bottom: 32px;
  background: ${COLORS.secondary};
`;

export default Main;
