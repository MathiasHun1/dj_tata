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
      <ImageWrapper style={{ '--height': styles['--height'] }}>
        <Caption>
          <CaptionText>{text}</CaptionText>
        </Caption>
        <Image src={imageSource} alt="" style={{ width: imgWidth }} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
`;

const Image = styled.img`
  border-radius: 4px;
`;

const Caption = styled.figcaption`
  position: absolute;
  color: black;
  background: yellow;
  padding: 2px 6px;
  left: 0;
  transform: skew(20deg) translateX(-10px) translateY(-10px);
`;

const CaptionText = styled.p`
  transform: skew(-20deg);
`;

export default Card;
