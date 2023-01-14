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


const AuthorizationPopup: FC = () => {
  const isPopupOpen = useSelector((state: RootState) => state.authSlice.openAuth);
  const [isTypeAuth, setIsTypeAuth] = useState(true);
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setUserData(false));
  };
  const onChangeType = () => {
    setIsTypeAuth(!isTypeAuth);
  };
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

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
              {isTypeAuth ? <RegisterForm /> : <LoginForm />}
            </div>
            <div className={s.changeType}>
              <button type={'reset'} onClick={onChangeType}>{isTypeAuth ? 'I have account' : 'I don\'t have account'}</button>
            </div>
            <Button type={'reset'}>{isTypeAuth ? 'Register' : 'Login'}</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AuthorizationPopup;