import React, { FC } from 'react';
import AuthInput from '../../ui/inputs/authInput/AuthInput';

interface props {
  errors: any;
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