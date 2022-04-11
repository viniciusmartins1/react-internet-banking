import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import { Checkbox, FormControlLabel, FormHelperText } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { FaUser, FaEyeSlash, FaEye } from 'react-icons/fa';
import Modal from "react-modal";

import { ValidateProps, ValidateUser } from '../../utils/login/validateProps';
import { RememberPass, TitleModal, Description, customStyles, customStylesModal } from '../../assets/styles/login/login.js';

import 'react-toastify/dist/ReactToastify.css';

import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { loginForgotPass, postLogin, loginFailed, loginSuccess } from '../../redux/actions/LoginActions';
import { useDispatch, useSelector } from "react-redux";

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Box from "@material-ui/core/Box"
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
  const loginFail = useSelector(state => state.reducerLogin.loginFailed);
  const loginSucces = useSelector(state => state.reducerLogin.loginSuccess);


  useEffect(() => {
    if (statusForgot) {
      toast.success('Email enviado com sucesso!!', {
        autoClose: 3000
      })
      dispatch(loginForgotPass(false));
    }

  }, [statusForgot])

  useEffect(() => {
    if (loginFail) {
      toast.error('Falha ao fazer login!!', {
        autoClose: 2000
      })
      dispatch(loginFailed(false))
    }
  }, [loginFail])

  useEffect(() => {
    if (loginSucces) {
      toast.success('Login efetuado com sucesso!!', {
        autoClose: 2000
      })
      history.push('/');
      dispatch(loginSuccess(false))
    }
  }, [loginSucces])

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
        dispatch(postLogin(values.user, values.password));
        dispatch(hideLoading());
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
      <form onSubmit={formik.handleSubmit}>

        <Box sx={{
          width: 250
        }}>
          <FormControl fullWidth margin="normal" variant="outlined">

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
              <FormHelperText style={customStyles.warningHelpText}>{formik.errors.user}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl margin="normal" variant="outlined">
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
              <FormHelperText style={customStyles.warningHelpText}>{formik.errors.password}</FormHelperText>
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

          <FormControl fullWidth variant="outlined">
            <Button style={customStyles.buttonLogin} type="submit">LOGIN</Button>
          </FormControl>
        </Box>

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
        style={customStylesModal}
      >
        <Box sx={{
          width: 450,
        }}>
          <TitleModal>Recuperação de senha</TitleModal>
          <Description>
            Preencha o campo com seu nome de usuario,
            e te enviaremos um email de recuperação
          </Description>

          <form onSubmit={formikPass.handleSubmit}>
            <Box sx={{
              width: 450,
            }}>
              <FormControl fullWidth margin="normal" variant="outlined">
                <OutlinedInput
                  id="userName"
                  {...formikPass.getFieldProps('userName')}
                  error={formikPass.touched.userName && formikPass.errors.userName ? true : null}
                  startAdornment={
                    <InputAdornment position="start">
                      <FaUser />
                    </InputAdornment>
                  }
                  placeholder="Nome de Usuário"
                />
                {formikPass.touched.userName && formikPass.errors.userName ? (
                  <FormHelperText style={customStyles.warningHelpText}>{formikPass.errors.userName}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl margin="normal" variant="outlined">
                <Button style={customStyles.buttonConfirmModal} type="submit">Confirmar</Button>
              </FormControl>
            </Box>
          </form>
        </Box>

      </Modal>
    </>
  );
}

export default FormLogin;