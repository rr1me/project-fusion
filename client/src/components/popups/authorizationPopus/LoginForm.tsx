import React, { FC } from 'react';
import AuthInput from '../../ui/inputs/authInput/AuthInput';
import {FieldErrors} from "react-hook-form/dist/types/errors";

interface props {
  errors: FieldErrors;
}

const LoginForm: FC<props> = ({ errors }) => {
  return (
    <>
      <AuthInput placeholder={'Login'} type={'text'} name={'login'} errors={errors}/>
      <AuthInput placeholder={'Password'} type={'password'} name={'password'} errors={errors} />
    </>
  );
};

export default LoginForm;