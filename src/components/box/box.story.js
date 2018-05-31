'user strict';

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../../css/_reset.scss';
import Box from './';

storiesOf('Box', module)
  .add('with', () => <Box title='Test Story Register' text='First time using of caffeine.' />);
