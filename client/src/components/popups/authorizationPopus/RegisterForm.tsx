import React, { FC } from 'react';
import AuthInput from '../../ui/inputs/authInput/AuthInput';

interface props {
  errors: any;
}

const RegisterForm: FC<props> = ({ errors }) => {
  return (
    <>
      <AuthInput placeholder={'Login'} type={'text'} name={'login'} errors={errors}/>
      <AuthInput placeholder={'Email'} type={'email'} name={'email'} errors={errors} />
      <AuthInput placeholder={'Password'} type={'password'} name={'password'} errors={errors} />
      <AuthInput placeholder={'Repeat password'} type={'password'} name={'passwordRepeat'} errors={errors} />
    </>
  );
};

export default RegisterForm;