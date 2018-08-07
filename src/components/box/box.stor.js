'user strict';

import React from 'react';

import { storiesOf } from '@storybook/react';

import '../../css/_reset.scss';
import Box from './';

storiesOf('Box', module)
  .add('with', () => <Box title='Test Story Register' text='First time using of caffeine.' />);
