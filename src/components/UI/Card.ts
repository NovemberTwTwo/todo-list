import { styled } from 'styled-components';

const Card = styled.div<{
  start?: number;
  end?: number;
  marginTop?: number;
  marginBottom?: number;
}>`
  overflow: visible;
  width: 100%;
  font-family: 'Pretendard';
  letter-spacing: -2.5%;

  grid-column-start: ${(props) => (props.start ? props.start : 1)};
  grid-column-end: ${(props) => (props.end ? props.end : 7)};
  margin: ${(props) => `${props.marginTop}px 0 ${props.marginBottom}px 0`};
`;

export default Card;
