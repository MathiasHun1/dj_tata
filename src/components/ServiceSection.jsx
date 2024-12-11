import styled from 'styled-components';
import { COLORS } from '../constants';
import Card from './Card';
// import partyPic from '../assets/party3.jpg';

const ServiceSection = ({ imageSource, cardSize, cardText, children, direction }) => {
  let directionProp = direction === null || direction === 'row' ? 'row' : 'row-reverse';
  console.log(directionProp);

  return (
    <Wrapper style={{ '--wrap-direction': directionProp }}>
      <Card imageSource={imageSource} size={cardSize} text={cardText} />
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 300px;
  background: ${COLORS.secondary};
  padding: 32px;
  display: flex;
  flex-direction: var(--wrap-direction);
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
`;

const ChildWrapper = styled.div`
  max-width: 380px;

  & h3 {
    text-align: center;
  }
`;

export default ServiceSection;
