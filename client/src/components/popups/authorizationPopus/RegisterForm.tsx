import React, {FC} from 'react'
import AuthInput from '../../ui/inputs/authInput/AuthInput';

const RegisterForm: FC = () => {
  return (
    <>
      <AuthInput placeholder={'Login'} type={'text'} name={'login'} />
      <AuthInput placeholder={'Email'} type={'email'} name={'email'} />
      <AuthInput placeholder={'Password'} type={'password'} name={'password'} />
      <AuthInput placeholder={'Repeat password'} type={'password'} name={'repeat-password'} />
    </>
  )
}

export default RegisterForm;