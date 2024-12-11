import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Wrapper>
      <Header />
      <Main></Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
