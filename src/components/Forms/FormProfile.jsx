import { Card, CardContent, Grid, TextField, Typography, InputLabel } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import InputMask from 'react-input-mask';
import { requestData } from "../../redux/actions/ProfileActions";


const FormProfile = () => {

  const profile = useSelector(state => state.reducerProfile.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestData());
  }, [])

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
            Meu perfil
          </Typography>
          <form>
            <Grid container justifyContent="center" gridColumn={2} spacing={2}>
              <Grid xs={12} sm={8} item>
                <InputLabel shrink>Nome de Usuário</InputLabel>
                <TextField value={profile.nome} InputProps={{ readOnly: true, }} variant="filled" fullWidth />
              </Grid>
              <Grid xs={12} sm={8} item >
                <InputLabel shrink>Email</InputLabel>
                <TextField type="email" InputProps={{ readOnly: true, }} value={profile.email} variant="filled" fullWidth />
              </Grid>
              <Grid xs={12} sm={8} item>
                <InputLabel shrink>Data de Nascimento</InputLabel>
                <TextField type="date" value={profile.data_nasc} InputProps={{ readOnly: true, }} variant="filled" fullWidth />
              </Grid>
              <Grid xs={12} sm={8} item>
                <InputLabel shrink>Celular</InputLabel>
                <InputMask
                  mask="(99) 99999-9999"
                  value={profile.celular}
                >
                  {() => <TextField
                    InputProps={{ readOnly: true, }}
                    variant="filled"
                    fullWidth
                  />}
                </InputMask>
              </Grid>
              <Grid xs={12} sm={8} item>
                <InputLabel shrink>Descrição</InputLabel>
                <TextField InputProps={{ readOnly: true, }} value={profile.descricao} multiline rows={8} variant="filled" fullWidth />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>

  );
}

export default FormProfile;