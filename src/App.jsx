import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Wrapper id="home">
      <Header />
      <Main></Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`;
