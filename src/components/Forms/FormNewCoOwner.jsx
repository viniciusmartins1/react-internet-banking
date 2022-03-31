import React from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from '../../redux/actions/AppActions'
import { createCoOwner } from '../../redux/actions/CoOwnersActions'
import { ValidatePropsCoOwner } from '../../utils/coOwners/validateProps'


const FormNewCoOwner = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      birthDate: '',
      phoneNumber: '',
    },
    validate: ValidatePropsCoOwner,
    onSubmit: values => {
      dispatch(showLoading());

      setTimeout(() => {
        dispatch(createCoOwner(values));
        dispatch(hideLoading());
        history.push('/cotitulares');
      }, 2000)
    }
  });

  return (
    <div>
      <Card style={{
        maxWidth: 900,
        margin: "30px auto",
        maxHeight: 700,
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