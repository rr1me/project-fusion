import React, { FC, useState } from 'react';
import s from './AuthorizationPopup.module.scss';
import CloseIcon from '../../ui/icons/CloseIcon';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '../../ui/buttons/authButtons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setUserData } from '../../../redux/slices/authSlice';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidate, registerValidate } from '../../../utils/validate/authValidate';


const AuthorizationPopup: FC = () => {
  const isPopupOpen = useSelector((state: RootState) => state.authSlice.openAuth);
  const [isTypeAuth, setIsTypeAuth] = useState(true);
  const methods = useForm({
    resolver: yupResolver(isTypeAuth ? registerValidate : loginValidate),
  });
  const dispatch = useDispatch();
  const onClose = () => dispatch(setUserData(false));
  const onChangeType = () => {
    setIsTypeAuth(!isTypeAuth);
    methods.clearErrors();
  };
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const errors = methods.formState.errors;
  return (
    <div className={`${s.authMainPopup} ${isPopupOpen && s.active}`} onMouseDown={onClose}>
      <div className={`${s.authWrapper}`} onMouseDown={(e) => e.stopPropagation()}>
        <span className={s.decore} />
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <button type={'reset'} onMouseDown={onClose}>
              <CloseIcon />
            </button>
            <div className={s.inputsWrapper}>
              {isTypeAuth ? <RegisterForm errors={errors} /> : <LoginForm errors={errors} />}
            </div>
            <div className={s.changeType}>
              <button
                type={'reset'}
                onClick={onChangeType}>
                {isTypeAuth ? 'I have account' : 'I don\'t have account'}
              </button>
            </div>
            <Button type={'submit'}>{isTypeAuth ? 'Register' : 'Login'}</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AuthorizationPopup;