import React, {FC} from 'react';
import {useFormContext} from 'react-hook-form';
import s from './AuthInput.module.scss';
import {FieldErrors} from "react-hook-form/dist/types/errors";

interface props {
  placeholder: string;
  type: 'text' | 'email' | 'password';
  name: string;
  errors: FieldErrors
}

const AuthInput: FC<props> = ({ placeholder, type, name, errors }) => {
  const { register } = useFormContext();
  return (
    <input type={type} className={`${s.input} ${errors[name] && s.active}`} placeholder={placeholder} {...register(name)}/>
  );
};

export default AuthInput;