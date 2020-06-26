import * as React from 'react';

import { Hello } from './Hello';
import GlobalStyle from './utils/GlobalStyle';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Hello />
    </>
  );
}
