import React, { FC } from 'react';
import s from './Button.module.scss';

const Button: FC = () => {
  return (
    <button className={s.button}>Login</button>
  )
}

export default Button;