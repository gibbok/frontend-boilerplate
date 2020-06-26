import React from 'react';
import renderer from 'react-test-renderer';

import { globalStylesDecorator } from './storybook';

describe('storybook', () => {
  describe('globalStylesDecorator', () => {
    it('should render story with global styles in document head', () => {
      const tree = renderer.create(globalStylesDecorator(() => <div>test</div>));

      expect(document.head).toMatchSnapshot();
      expect(tree).toMatchSnapshot();
    });
  });
});
