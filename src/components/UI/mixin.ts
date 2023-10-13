import { css } from 'styled-components';
import { BoxSpacing } from './types/types';

const spacing = css<BoxSpacing>`
  ${({ $margin }) =>
    $margin &&
    css`
      margin: ${$margin};
    `}

  ${({ $padding }) =>
    $padding &&
    css`
      padding: ${$padding};
    `}
`;

export { spacing };
