import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-icon.svg';
import { ReactComponent as User } from '../../assets/icons/user-icon.svg';
import { ReactComponent as Check } from '../../assets/icons/check-icon.svg';
import { ReactComponent as Email } from '../../assets/icons/email-icon.svg';
import { ReactComponent as EyeClosed } from '../../assets/icons/eye-closed-icon.svg';
import { ReactComponent as EyeOpened } from '../../assets/icons/eye-opened-icon.svg';
import { ReactComponent as Key } from '../../assets/icons/key-icon.svg';
import { ReactComponent as Search } from '../../assets/icons/search-icon.svg';
import { ReactComponent as Title } from '../../assets/icons/title-icon.svg';
import { ReactComponent as Calender } from '../../assets/icons/calender-icon.svg';
import { ReactComponent as Document } from '../../assets/icons/document-icon.svg';
import { BoxSizing, BoxSpacing, IconColor } from './types/types';
import { spacing } from './mixin';

interface IconProps extends BoxSizing, BoxSpacing, IconColor {
  $strokeWidth?: number;
}

const ArrowIcon = styled(Arrow)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '10px')};
  height: ${({ $height }) => ($height ? $height : '10px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.fontSecondary};
  }
`;

const UserIcon = styled(User)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const CheckIcon = styled(Check)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const EmailIcon = styled(Email)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const KeyIcon = styled(Key)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const SearchIcon = styled(Search)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '24px')};
  height: ${({ $height }) => ($height ? $height : '24px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const EyeClosedIcon = styled(EyeClosed)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '28px')};
  height: ${({ $height }) => ($height ? $height : '28px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const EyeOpenedIcon = styled(EyeOpened)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '28px')};
  height: ${({ $height }) => ($height ? $height : '28px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.main};
  }
`;

const TitleIcon = styled(Title)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

const CalenderIcon = styled(Calender)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
  rect {
    fill: ${(props) =>
      props.$fill ? props.$fill : props.theme.colors.secondary};
  }
`;

const DocumentIcon = styled(Document)<IconProps>`
  width: ${({ $width }) => ($width ? $width : '16px')};
  height: ${({ $height }) => ($height ? $height : '16px')};

  ${spacing}

  ${({ $strokeWidth }) =>
    $strokeWidth &&
    css`
      stroke-width: ${$strokeWidth}px;
    `}

  path {
    stroke: ${(props) =>
      props.$stroke ? props.$stroke : props.theme.colors.secondary};
  }
`;

export {
  ArrowIcon,
  UserIcon,
  CheckIcon,
  EmailIcon,
  EyeClosedIcon,
  EyeOpenedIcon,
  KeyIcon,
  SearchIcon,
  TitleIcon,
  CalenderIcon,
  DocumentIcon,
};
