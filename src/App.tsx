import * as React from 'react';
import GlobalStyle from './utils/GlobalStyle';
import { Hello } from './Hello';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Hello />
    </>
  );
}
