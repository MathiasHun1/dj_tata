import styled from 'styled-components';

const Card = ({ imageSource, text, size, imgSize }) => {
  const imgWidth = imgSize ? `${imgSize.toString()}px` : '100%';

  let styles;
  if (size === 'large') {
    styles = {
      '--width': '220px',
      '--height': '100%',
    };
  } else if (size === 'medium') {
    styles = {
      '--width': '150px',
      '--height': '200px',
    };
  } else {
    throw new Error('missing or invalid size properyty');
  }

  return (
    <Wrapper style={styles}>
      <Caption>
        <CaptionText>{text}</CaptionText>
      </Caption>
      <ImageWrapper style={{ '--height': styles['--height'] }}>
        <img src={imageSource} alt="" style={{ width: imgWidth }} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  position: relative;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: var(--width);
  height: var(--height);
  border-radius: 4px;
`;

const Caption = styled.figcaption`
  position: absolute;
  color: black;
  background: yellow;
  padding: 2px 6px;
  transform: skew(20deg) translatex(-10px);
`;

const CaptionText = styled.p`
  transform: skew(-20deg);
`;

export default Card;
