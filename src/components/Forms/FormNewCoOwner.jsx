import React, { useEffect } from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { newCoOwnerSuccess, postCoOwner, newCoOwnerFailed } from '../../redux/actions/CoOwnersActions'
import { ValidatePropsCoOwner } from '../../utils/coOwners/validateProps'
import { toast } from "react-toastify";


const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

toast.configure();

const FormNewCoOwner = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const newSuccess = useSelector(state => state.reducerCoOwner.newSuccess)
  const newFailed = useSelector(state => state.reducerCoOwner.newFailed)

  useEffect(() => {
    if (newSuccess) {
      toast.success('Co-Titular cadastrado com sucesso!!', {
        autoClose: 2000
      })
      dispatch(newCoOwnerSuccess(false));
      history.push('/cotitulares');
    }
  }, [newSuccess])
  
  useEffect(() => {
    if (newFailed) {
      toast.error('Erro ao cadastrar novo Co-Titular!!', {
        autoClose: 2000
      })
      dispatch(newCoOwnerFailed(false));
    }
  }, [newFailed])

  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      birthDate: '',
      phoneNumber: '',
      email: '',
      description: '',
    },
    validate: ValidatePropsCoOwner,
    onSubmit: values => {
      const data = {
        nome: values.name,
        cpf: onlyNumbers(values.cpf),
        dataNasc: values.birthDate,
        celular: values.phoneNumber,
        email: values.email,
        descricao: values.description
      }

      dispatch(showLoading());

      setTimeout(() => {
        dispatch(postCoOwner(data));
        dispatch(hideLoading());
      }, 2000)
    }
  });

  return (
    <div>
      <Card style={{
        maxWidth: 900,
        margin: "30px auto",
        maxHeight: 850,
        padding: "20px 5px",
      }}>
        <CardContent>
          <Typography gutterBottom style={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: 10,
            fontSize: 30,
          }} variant="h5">
            Novo Co-Titular
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container justifyContent="center" gridColumn={2} spacing={2}>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Nome"
                  placeholder="Insira o nome do Co-titular"
                  variant="outlined"
                  fullWidth
                  {...formik.getFieldProps('name')}
                  error={formik.touched.name && formik.errors.name ? (
                    true
                  ) : null}
                  helperText={formik.touched.name && formik.errors.name ? (
                    formik.errors.name
                  ) : null}
                />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Email"
                  placeholder="Insira o email do Co-titular"
                  variant="outlined"
                  fullWidth
                  {...formik.getFieldProps('email')}
                  error={formik.touched.email && formik.errors.email ? (
                    true
                  ) : null}
                  helperText={formik.touched.email && formik.errors.email ? (
                    formik.errors.email
                  ) : null}
                />
              </Grid>
              <Grid xs={12} sm={8} item >
                <InputMask
                  mask="999.999.999-99"
                  {...formik.getFieldProps('cpf')}
                >
                  {() => <TextField
                    id="cpf"
                    label="CPF"
                    placeholder="Insira o CPF"
                    variant="outlined"
                    fullWidth
                    error={formik.touched.cpf && formik.errors.cpf ? (
                      true
                    ) : null}
                    helperText={formik.touched.cpf && formik.errors.cpf ? (
                      formik.errors.cpf
                    ) : null}
                  />}
                </InputMask>
              </Grid>
              <Grid xs={12} sm={8} item>
                <InputMask
                  mask="99/99/9999"
                  {...formik.getFieldProps('birthDate')}
                >
                  {() => <TextField
                    id="birthDate"
                    label="Data de Nascimento"
                    variant="outlined"
                    fullWidth
                    error={formik.touched.birthDate && formik.errors.birthDate ? (
                      true
                    ) : null}
                    helperText={formik.touched.birthDate && formik.errors.birthDate ? (
                      formik.errors.birthDate
                    ) : null}
                  />}
                </InputMask>
              </Grid>
              <Grid xs={12} sm={8} item>
                <InputMask
                  mask="(99) 99999-9999"
                  {...formik.getFieldProps('phoneNumber')}
                >
                  {() => <TextField
                    id="phoneNumber"
                    label="Celular"
                    placeholder="Insira seu número do celular"
                    variant="outlined"
                    fullWidth
                    error={formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      true
                    ) : null}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      formik.errors.phoneNumber
                    ) : null}
                  />}
                </InputMask>
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField
                  label="Descrição"
                  placeholder="Insira uma descrição para o Co-titular"
                  variant="outlined"
                  multiline
                  rows={8}
                  fullWidth
                  {...formik.getFieldProps('description')}
                  error={formik.touched.description && formik.errors.description ? (
                    true
                  ) : null}
                  helperText={formik.touched.description && formik.errors.description ? (
                    formik.errors.description
                  ) : null}
                />
              </Grid>
              <Grid xs={12} sm={8} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );

}

export default FormNewCoOwner;