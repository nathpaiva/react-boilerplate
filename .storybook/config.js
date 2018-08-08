'use strict';

import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Components of app',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'http://nathpaiva.com.br',
});

configure(loadStories, module);
