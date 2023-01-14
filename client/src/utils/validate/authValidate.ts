import * as yup from 'yup';

export const loginValidate = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});

export const registerValidate = yup.object().shape({
  login: yup.string().required().min(5, 'Min length login is 5 words').max(32, 'Max length login is 32 words'),
  email: yup.string().required().email(),
  password: yup.string().min(3, 'Min length password is 3 words').max(32, 'Max length password is 32 words').required('This input is required').oneOf([yup.ref('passwordRepeat')], 'Passwords are not the same'),
  passwordRepeat: yup.string().min(3, 'Min length password is 3 words').max(32, 'Max length password is 32 words').required('This input is required').oneOf([yup.ref('password')], 'Passwords are not the same'),
})