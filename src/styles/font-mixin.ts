import { css } from 'styled-components';
import PretendardBlack from '../assets/fonts/Pretendard-Black.woff2';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff2';
import PretendardExtraBold from '../assets/fonts/Pretendard-ExtraBold.woff2';
import PretendardExtraLight from '../assets/fonts/Pretendard-ExtraLight.woff2';
import PretendardLight from '../assets/fonts/Pretendard-Light.woff2';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';
import PretendardSemiBold from '../assets/fonts/Pretendard-SemiBold.woff2';
import PretendardThin from '../assets/fonts/Pretendard-Thin.woff2';

const fonts = css`
  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardBlack'), url(${PretendardBlack}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardExtraBold'),
      url(${PretendardExtraBold}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardBold'), url(${PretendardBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardSemiBold'), url(${PretendardSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardMedium'), url(${PretendardMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardRegular'), url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardLight'), url(${PretendardLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardExtraLight'),
      url(${PretendardExtraLight}) format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('PretendardThin'), url(${PretendardThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }
`;

export default fonts;
