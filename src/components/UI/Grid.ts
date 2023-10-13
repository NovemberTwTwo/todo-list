import styled from 'styled-components';

interface GridProps {
  $background?: string;
  $opacity?: number;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-column-gap: 20px;
  overflow: visible;
  margin: 0 24px 0 24px;
  opacity: ${({ $opacity }) => ($opacity ? $opacity : 1)};
  background-color: ${(props) =>
    props.$background ? props.$background : props.theme.colors.main};

  // some smalls..
  @media screen and (min-width: 0px) {
    grid-template-columns: repeat(6, 1fr);
  }

  // Phone - portrait
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Phone -landscape + portrait
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Small tablet - portrait
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Large Tablet - portrait
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Phone + Smalltablet - landscape
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Large Tablet -landscape
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Desktop
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }

  // Wide Screen desktop
  @media screen and (min-width: ${(props) => props.theme.medias.wideScreen}) {
  }
`;

export default Grid;
