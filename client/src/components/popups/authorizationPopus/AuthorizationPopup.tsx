import React, { FC } from 'react';
import s from './AuthorizationPopup.module.scss';
import CloseIcon from '../../ui/icons/CloseIcon';
import { useForm, FormProvider } from 'react-hook-form';
import AuthInput from '../../ui/inputs/authInput/AuthInput';
import Button from '../../ui/buttons/authButtons/Button';

const AuthorizationPopup: FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={`${s.authMainPopup}`}>
      <div className={`${s.authWrapper}`}>
        <span className={s.decore} />
        <CloseIcon />
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={s.inputsWrapper}>
              <AuthInput placeholder={'Login'} type={'text'} name={'login'}/>
              <AuthInput placeholder={'Password'} type={'password'} name={'password'}/>
            </div>
            <Button />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AuthorizationPopup;