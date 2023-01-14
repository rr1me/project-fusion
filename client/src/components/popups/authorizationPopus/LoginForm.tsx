import React, {FC} from 'react'
import AuthInput from '../../ui/inputs/authInput/AuthInput';

const LoginForm: FC = () => {
  return (
    <>
      <AuthInput placeholder={'Login'} type={'text'} name={'login'} />
      <AuthInput placeholder={'Password'} type={'password'} name={'password'} />
    </>
  )
}

export default LoginForm;