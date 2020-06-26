import React from 'react';
import renderer from 'react-test-renderer';

import GlobalStyle from './GlobalStyle';

describe('GlobalStyle', () => {
  it('renders properly', () => {
    renderer.create(<GlobalStyle />);
    expect(document.head).toMatchSnapshot();
  });
});
