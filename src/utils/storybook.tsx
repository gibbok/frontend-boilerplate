import React from 'react';

import GlobalStyle from './GlobalStyle';

/**
 * Decorate a story with glocal styles.
 * @param story Story
 */
export const globalStylesDecorator = (story: () => unknown): JSX.Element => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
);
