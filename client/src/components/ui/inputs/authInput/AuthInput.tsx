import React, { FC } from 'react';
import s from './AuthInput.module.scss'

interface props {
  placeholder: string;
  type: 'text' | 'email' | 'password'
}

const AuthInput: FC<props> = ({placeholder, type}) => {
  return (
    <input type={type} className={s.input} placeholder={placeholder}/>
  );
};

export default AuthInput;