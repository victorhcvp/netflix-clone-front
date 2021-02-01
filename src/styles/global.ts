import { createGlobalStyle } from 'styled-components';

import NetflixSans from '../assets/fonts/NetflixSans.woff2';
import NetflixIcons from '../assets/fonts/nf-icon-v1-93.woff';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Netflix Sans';
    src: local('Netflix Sans'), local('NetflixSans'), url(${NetflixSans}) format('woff2');
  }

  @font-face {
    font-family: 'Netflix Icons';
    src: local('Netflix Icons'), local('NetflixIcons'), url(${NetflixIcons}) format('woff');
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Netflix Sans';
    background-color: #141414;
    user-select: none;
    padding: 20px 40px;
  }

  .icon {
    font-family: 'Netflix Icons';
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  }
`;
