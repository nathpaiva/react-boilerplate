'user strict';

import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../css/_reset.scss';
import Button from './';

storiesOf('Special Button', module)
  .add('default', () => <Button />)
  .add('hover', () => <Button classModify='button-hover' />)
  .add('clicked', () => <Button classModify='button-clicked' />);
