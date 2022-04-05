import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { useHistory } from "react-router-dom";
import { FaUser, FaEyeSlash, FaEye } from 'react-icons/fa';
import Modal from "react-modal";

import { ValidateProps, ValidateUser } from '../../utils/login/validateProps';
import { RememberPass, TitleModal, Description, ContainerUser, InputUser, WarningModal, Confirm, customStyles } from '../../assets/styles/login/login.js';

import 'react-toastify/dist/ReactToastify.css';

import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { loginForgotPass, loginLogin } from '../../redux/actions/LoginActions';
import { useDispatch, useSelector } from "react-redux";

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button } from "@material-ui/core";



Modal.setAppElement('#root');
toast.configure();



const FormLogin = () => {

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [modalIsOpen, setIsOpen] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();
  const statusForgot = useSelector(state => state.reducerLogin.forgotPass);


  useEffect(() => {
    if (statusForgot) {
      toast.success('Email enviado com sucesso!!', {
        autoClose: 3000
      })

      dispatch(loginForgotPass(false));
    }

  }, [statusForgot])

  function handleOpenModel() {
    setIsOpen(true);
  }

  function handleCloseModel() {
    setIsOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
      rememberPass: false,
    },
    validate: ValidateProps,
    onSubmit: values => {

      dispatch(showLoading());

      setTimeout(() => {
        dispatch(loginLogin(values.user, values.password));
        dispatch(hideLoading());
        history.push('/');
      }, 3000)
    }
  });

  const formikPass = useFormik({
    initialValues: {
      userName: ''
    },
    validate: ValidateUser,
    onSubmit: values => {
      dispatch(showLoading());
      setTimeout(() => {
        dispatch(hideLoading());
        dispatch(loginForgotPass(true));

      }, 3000)
    }
  })

  return (
    <>
      <form  onSubmit={formik.handleSubmit}>

        <FormControl sx={{ m: 1, width: '33ch' }} variant="outlined">
          
          <OutlinedInput
            id="user"
            type='text'
            {...formik.getFieldProps('user')}
            error={formik.touched.user && formik.errors.user ? (
              true
            ) : null}
            placeholder="Nome de usuário"
          />
          {formik.touched.user && formik.errors.user ? (
            <FormHelperText>{formik.errors.user}</FormHelperText>
          ) : null}
        </FormControl>

        <FormControl sx={{ m: 1, width: '33ch' }} variant="outlined">
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            {...formik.getFieldProps('password')}
            error={formik.touched.password && formik.errors.password ? (
              true
            ) : null}

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <FaEye /> : <FaEyeSlash />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Senha"
          />
          {formik.touched.password && formik.errors.password ? (
            <FormHelperText>{formik.errors.password}</FormHelperText>
          ) : null}
        </FormControl>

        <FormControlLabel
          label={<RememberPass>Lembrar minha senha?</RememberPass>}
          style={customStyles.checkRememberPass}
          control={
            <Checkbox
              name="rememberPass"
              color="success"
              size="small"
              {...formik.getFieldProps('rememberPass')}
            />
          }
        />

        <FormControl sx={{ m: 1, width: '33ch' }} variant="outlined">
          <Button style={customStyles.buttonLogin} type="submit">LOGIN</Button>
        </FormControl>

      </form>

      <Button
        style={customStyles.buttonForgotPass}
        onClick={handleOpenModel}
      >
        <p>Esqueci minha senha</p>
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModel}
        style={customStyles}
      >
        <TitleModal>Recuperação de senha</TitleModal>
        <Description>
          Preencha o campo com seu nome de usuario,
          e te enviaremos um email de recuperação
        </Description>

        <form onSubmit={formikPass.handleSubmit}>
          <ContainerUser>
            <FaUser />
            <InputUser
              type="text"
              placeholder="Usuario"
              id="userName"
              name="userName"
              {...formikPass.getFieldProps('userName')}
            />
          </ContainerUser>
          {formikPass.touched.userName && formikPass.errors.userName ? (
            <WarningModal>{formikPass.errors.userName}</WarningModal>
          ) : null}

          <Confirm type="submit">Confirmar</Confirm>
        </form>
      </Modal>
    </>
  );
}

export default FormLogin;