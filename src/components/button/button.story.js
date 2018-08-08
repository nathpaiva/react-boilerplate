'user strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import '../../css/_reset.scss';
import Button from './';

// const props = {
//   info: 'tooltip',
//   visible: false,
//   trigger: select('trigger', ['hover', 'focus'], 'hover'),
//   onVisibleChange: linkTo('Tooltip', 'opened')
// };

storiesOf('Special Button', module)
  .add('default', () => <Button />)
  .add('hover', () => <Button classModify='button-hover' />)
  .add('clicked', () => <Button classModify='button-clicked' />);
