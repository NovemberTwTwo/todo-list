import { styled } from 'styled-components';
import { BoxSpacing } from './types/types';
import { spacing } from './mixin';

interface CardProps extends BoxSpacing {
  $start?: number;
  $end?: number;
}

const Card = styled.div<CardProps>`
  overflow: visible;
  width: 100%;
  font-family: 'Pretendard';
  letter-spacing: -2.5%;

  grid-column-start: ${(props) => (props.$start ? props.$start : 1)};
  grid-column-end: ${(props) => (props.$end ? props.$end : 7)};

  ${spacing}
`;

export default Card;
