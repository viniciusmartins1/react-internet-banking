import { CheckJustNumbers, CheckLettersAndNumbers } from '../validateChar';

export const ValidateProps = values => {

  const errors = {};

  if (!values.user) {
    errors.user = 'Obrigatório';
  } else if (values.user.length <= 1) {
    errors.user = 'Deve ter mais de 1 caracter';
  } else if (CheckLettersAndNumbers(values.user)) {
    errors.user = 'Deve conter apenas letras e números';
  }

  if (!values.password) {
    errors.password = 'Obrigatório';
  } else if (values.password.length <= 6) {
    errors.password = 'Deve ter mais de 6 caracter';
  } else if (CheckJustNumbers(values.password)) {
    errors.password = 'Deve conter apenas números';
  }

  return errors;
}

export const ValidateUser = values => {

  const errors = {};

  if (!values.userName) {
    errors.userName = 'Obrigatório';
  } else if (values.userName.length <= 1) {
    errors.userName = 'Deve ter mais de 1 caracter';
  } else if (CheckLettersAndNumbers(values.userName)) {
    errors.userName = 'Deve conter apenas letras e números';
  }

  return errors;
}