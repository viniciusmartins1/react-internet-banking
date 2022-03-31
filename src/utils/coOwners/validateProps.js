import { CheckJustLetters } from '../validateChar'

export const ValidatePropsCoOwner = values => {

  const errors = {};

  if (!values.name) {
    errors.name = 'Obrigatório';
  } else if (values.name.length <= 1) {
    errors.name = 'Deve ter mais de 1 caracter';
  } else if (CheckJustLetters(values.name)) {
    errors.name = 'Deve conter apenas letras';
  }

  // 
  if (!values.cpf) {
    errors.cpf = 'Obrigatório';
  } else if (
    !/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/.test(values.cpf)
  ) {
    errors.cpf = 'CPF inválido';
  }

  if (!values.birthDate) {
    errors.birthDate = 'Obrigatório';
  } else if (
    !/^([0-9]){2}\/([0-9]){2}\/([0-9]){4}$/.test(values.birthDate)
  ) {
    errors.birthDate = 'Data inválido';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Obrigatório';
  } else if (
    !/^\(([0-9]){2}\)\s([0-9]){5}\-([0-9]){4}$/.test(values.phoneNumber)
  ) {
    errors.phoneNumber = 'Numero de celular inválido';
  }

  return errors;
}