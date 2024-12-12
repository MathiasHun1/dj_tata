import styled from 'styled-components';
import { COLORS } from '../constants';

const Accesories = () => {
  return (
    <Container id="accesories">
      <h3>TECHNIKA</h3>
      <p>Fejlesztés alatt...</p>
    </Container>
  );
};

const Container = styled.div`
  background: ${COLORS.third};
  height: 300px;
  padding: 32px;
`;

export default Accesories;
