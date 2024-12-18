import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

import { useState } from 'react';

function App() {
  const [showMobileMenu, setShowMobile] = useState(false);

  return (
    <Wrapper id="home">
      <Header setShowMobile={setShowMobile} />
      <Main showMobileMenu={showMobileMenu} setShowMobile={setShowMobile} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`;
