import { css } from 'styled-components';
import { BoxSpacing } from './types/types';

const spacing = css<BoxSpacing>`
  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}

  ${(props) =>
    props.$padding &&
    css`
      padding: ${props.$padding};
    `}
`;

export { spacing };
