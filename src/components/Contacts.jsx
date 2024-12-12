import styled from 'styled-components';
import { COLORS } from '../constants';
import 'material-symbols';

const Contacts = () => {
  return (
    <Container id="contacts">
      <ContactCard>
        {/* <Title>Kapcsolat</Title> */}
        <List>
          <Section>
            <p>Elérhetőség</p>
            <ListItem>
              <span className="material-symbols-outlined">phone</span>
              +3630-414-7026
            </ListItem>
            <ListItem>
              <span className="material-symbols-outlined">email</span>
              <a href="mailto:tatamoto@gmail.com">tatamoto@gmail.com</a>
            </ListItem>
          </Section>

          <Section>
            <p>Személyesen</p>
            <ListItem>
              {/* <span className="material-symbols-outlined">pin_drop</span> */}
              1201 Budapest, Szondi utca 11
            </ListItem>
          </Section>

          <Section>
            <p>Nyitvatartás</p>
            <ListItem>Minden hétköznap 9-18</ListItem>
          </Section>
        </List>
      </ContactCard>
    </Container>
  );
};

const Container = styled.div`
  background: ${COLORS.secondary};
  padding: 32px;
  padding-top: 48px;
`;

const ContactCard = styled.div`
  position: relative;
  border: 1px solid;
  width: fit-content;
  // height: 250px;
  padding: 32px;
  padding-top: 16px;
  padding-bottom: 72px;
  background: hsl(345, 6.9%, 85%);
  border-radius: 4px;
`;

const List = styled.ul`
  padding: 0;

  & p {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const ListItem = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.125rem;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

export default Contacts;
