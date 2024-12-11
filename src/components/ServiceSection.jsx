import styled from 'styled-components';
import { COLORS } from '../constants';
import Card from './Card';
// import partyPic from '../assets/party3.jpg';

const ServiceSection = ({ imageSource, svgSource, cardSize, cardText, children, direction }) => {
  let directionProp = direction === null || direction === 'row' ? 'row' : 'row-reverse';

  return (
    <Wrapper style={{ '--wrap-direction': directionProp }}>
      <div style={{ flex: 1 }}>
        <Card imageSource={imageSource} svgSource={svgSource} size={cardSize} text={cardText} />
      </div>
      <ChildWrapper>{children}</ChildWrapper>
      <SvgImage src={svgSource} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 300px;
  background: ${COLORS.secondary};
  padding-top: 72px;
  padding-right: 32px;
  padding-left: 32px;
  display: flex;
  flex-direction: var(--wrap-direction);
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
`;

const ChildWrapper = styled.div`
  max-width: 380px;
  flex: 1;

  & h3 {
    text-align: center;
  }
`;

const SvgImage = styled.img`
  width: 300px;
  align-self: center;
  flex: 1;
`;

export default ServiceSection;
