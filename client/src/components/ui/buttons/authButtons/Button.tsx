import React, { FC } from 'react';
import s from './Button.module.scss';

const Button: FC = () => {
  return (
<div>
    <div className={s.buttonBorder}>
      <button className={s.button}>Login</button>
    </div>
</div>
  )
}

export default Button;