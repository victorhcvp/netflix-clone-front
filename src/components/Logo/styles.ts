import styled from 'styled-components';

export const LogoContainer = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: middle;
  color: #e50914;
  font-size: 25px;
  cursor: pointer;
  ::before {
    content: '\\e5d0';
  }
`;
