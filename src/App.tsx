import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import styled from 'styled-components';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <AppS>Hello world!😎</AppS>
    </>
  );
}

const AppS = styled.div`
  font-size: 2rem;
`;
