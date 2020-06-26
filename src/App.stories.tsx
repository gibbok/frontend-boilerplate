import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { globalStylesDecorator } from '../src/utils/storybook';
import { App } from './App';

storiesOf('App', module)
  .addDecorator(globalStylesDecorator)
  .add('base', () => <App />);
