'user strict';

import React, { Component } from 'react';
import Select from './components/select';

class App extends Component {
  render() {
    return (
      <div>
        <Select placeholder='Select an option' label='Variety' disabled={false} options={[
          {
            value: 'Generic',
            id: '1'
          },
          {
            value: 'Atlantic',
            id: '2'
          },
          {
            value: 'Kennebec',
            id: '4'
          },
          {
            value: 'Norkota',
            id: '5'
          },
          {
            value: 'Norland',
            id: '6'
          },
          {
            value: 'Onaway',
            id: '7'
          }
        ]} />
      </div>
    );
  }
}

export default App;
