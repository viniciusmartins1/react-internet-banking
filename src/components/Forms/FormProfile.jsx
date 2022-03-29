import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../Home/Header";
import LateralMenu from "../Home/LateralMenu";
import ProfileImg from "../../assets/img/perfil.png"
import styled from "styled-components";

const FormProfile = () => {

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
                <TextField label="Nome de Usuário" placeholder="Insira seu nome de usuario" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={8} item >
                <TextField type="email" label="Email" placeholder="Insira seu nome email" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField label="Data de Nascimento" placeholder="Insira sua data de nascimento" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField label="Celular" placeholder="Insira seu número do celular" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={8} item>
                <TextField label="Descrição" multiline rows={8} placeholder="Insira uma descrição sobre você" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={8} item>
                <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>

  );
}

export default FormProfile;