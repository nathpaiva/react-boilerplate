'user strict';

import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../css/_reset.scss';
import Select from './';

storiesOf('Select', module)
  .add('disabled', () => <Select placeholder='Select an option' disabled={true} label='Variety' options={[
    {
      value: 'Generic'
    },
    {
      value: 'Atlantic'
    },
    {
      value: 'Kennebec'
    },
    {
      value: 'Norkota'
    },
    {
      value: 'Norland'
    },
    {
      value: 'Onaway'
    }
  ]} />)
  .add('with options', () => <Select placeholder='Select an option' disabled={false} label='Variety' options={[
    {
      value: 'Generic'
    },
    {
      value: 'Atlantic'
    },
    {
      value: 'Kennebec'
    },
    {
      value: 'Norkota'
    },
    {
      value: 'Norland'
    },
    {
      value: 'Onaway'
    }
  ]} />);
