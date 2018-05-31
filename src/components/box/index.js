'user strict';

import React from 'react';

const Box = ({ title, text }) => (
  <h1>
    {title} and
    <small>
      {text}
    </small>
  </h1>
);

export default Box;
