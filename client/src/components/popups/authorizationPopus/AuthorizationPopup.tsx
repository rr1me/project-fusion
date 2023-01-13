import React, { FC } from 'react';
import s from './AuthorizationPopup.module.scss';
import CloseIcon from '../../ui/icons/CloseIcon';
import { useForm } from 'react-hook-form';
import AuthInput from '../../ui/inputs/authInput/AuthInput';
import Button from '../../ui/buttons/authButtons/Button';

const AuthorizationPopup: FC = () => {

  return (
    <div className={`${s.authMainPopup}`}>
      <div className={`${s.authWrapper}`}>
        <span className={s.decore} />
        <CloseIcon />
        <form>
          <div className={s.inputsWrapper}>
          <AuthInput placeholder={'Login'} type={'text'}/>
          <AuthInput placeholder={'Password'} type={'password'}/>
          </div>
          <Button/>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationPopup;