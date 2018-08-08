import React from 'react';
import { PinField } from '../icons/SvgIcons';
import styled from './button.scss';

const Button = ({ classModify }) => {
  return (
    <button className={`${styled['special-button']} ${classModify}`}>
      <PinField />
      <p>Draw your fields</p>
    </button>
  );
};

export default Button;
