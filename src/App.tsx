import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import styled from 'styled-components';
import logo from './assets/logo.svg';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <AppS>Hello world!😎</AppS>
      <img src={logo} alt="an image" width="100" height="100"></img>
    </>
  );
}

const AppS = styled.div`
  font-size: 2rem;
`;
