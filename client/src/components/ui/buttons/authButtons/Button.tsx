import React, { FC } from 'react';
import s from './Button.module.scss';

const Button: FC = () => {
  return (
<div>
    <button className={s.button}>Login</button>
</div>
  )
}

export default Button;