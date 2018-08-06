'user strict';

import React from 'react';
import style from './box.scss';

const Box = ({ title, text }) => (
  <h1 className={style.box}>
    {title} and
    <small>
      {text}
    </small>
  </h1>
);

export default Box;
