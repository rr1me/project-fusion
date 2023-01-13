import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import s from './AuthInput.module.scss';

interface props {
  placeholder: string;
  type: 'text' | 'email' | 'password';
  name: string;
}

const AuthInput: FC<props> = ({ placeholder, type, name }) => {
  const { register } = useFormContext();
  return (
    <input type={type} className={s.input} placeholder={placeholder} {...register(name)}/>
  );
};

export default AuthInput;