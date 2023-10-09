import { styled } from 'styled-components';

const Card = styled.div<{
  start?: number;
  end?: number;
  marginTop?: number;
  marginBottom?: number;
}>`
  overflow: visible;
  width: 100%;

  grid-column: '${(props) => `${props.start}/${props.end}`}';
  margin: '${(props) => props.marginTop}px 0 ${(props) =>
    props.marginBottom}px 0';
`;

export default Card;
