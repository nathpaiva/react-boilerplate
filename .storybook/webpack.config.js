'use strict';

const path = require('path');
const common = require('../webpack.config');

module.exports = {
  module: {
    rules: [
      common.cssLoader,
      common.cssLoaderUseable
    ]
  }
};
