import React, { FC } from 'react';
import s from './Button.module.scss';

interface props {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string;
}

const Button: FC<props> = ({ type, children }) => {
  return (
      <div className={s.buttonBorder}>
        <button className={s.button} type={type}>{children}</button>
      </div>
  );
};

export default Button;