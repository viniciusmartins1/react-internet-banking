import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import { Checkbox, FormControlLabel } from '@mui/material';
import { useHistory } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';
import Modal from "react-modal";

import { ValidateProps, ValidateUser } from '../../utils/login/validateProps';
import { Warning, RememberPass, TitleModal, Description, ContainerUser, InputUser, WarningModal, Confirm } from '../../assets/styles/login/login.js';

import 'react-toastify/dist/ReactToastify.css';
import '../../assets/styles/login/login.css';

import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { loginForgotPass, loginLogin } from '../../redux/actions/LoginActions';
import { useDispatch, useSelector } from "react-redux";



Modal.setAppElement('#root');
toast.configure();

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

const FormLogin = () => { 

  
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
      <form className="formLogin" onSubmit={formik.handleSubmit}>

        <div className="textField">
          <FaUser />
          <input
            placeholder={"Usuario"}
            id="user"
            name="user"
            type="text"
            {...formik.getFieldProps('user')}
          />
        </div>
        {formik.touched.user && formik.errors.user ? (
          <Warning>{formik.errors.user}</Warning>
        ) : null}

        <div className="textField">
          <FaLock />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            {...formik.getFieldProps('password')}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <Warning>{formik.errors.password}</Warning>
        ) : null}

        <FormControlLabel
          label={<RememberPass>Lembrar minha senha?</RememberPass>}
          className="formControlLabel"
          control={
            <Checkbox
              name="rememberPass"
              color="success"
              size="small"
              {...formik.getFieldProps('rememberPass')}
            />
          }
        />

        <button className="buttonLogin" type="submit">LOGIN</button>

      </form>
      <button
        className="rememberPassword"
        onClick={handleOpenModel}
      >
        <p>Esqueci minha senha</p>
      </button>

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