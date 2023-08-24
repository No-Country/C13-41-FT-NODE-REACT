"use client";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright (props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://klinikapp.com/">
        klinika - No Country 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Doctor () {

  const handleSubmit = (event) => {

    event.preventDefault();

    const data = new FormData (event.currentTarget);

    console.log({

      name: data.get('name'),
      surname: data.get('surname'),
      dob: data.get('dob'),
      license: data.get('license'),
      specialty: data.get('specialty'),
      education: data.get('education'),
      email: data.get('email'),
      password: data.get('password'),

    });

  };

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Registro de Usuario - Medico
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>

            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>

                <TextField
                  autoComplete="off"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                />

              </Grid>

              <Grid item xs={12} sm={6}>

                <TextField
                  required
                  fullWidth
                  id="surname"
                  label="Apellido"
                  name="surname"
                  autoComplete="off"
                />

              </Grid>

            <Grid item xs={12} sm={12}>

            <TextField
                  autoComplete="off"
                  name="dob"
                  required
                  fullWidth
                  id="dob"
                  label=""
                  type="date"
            />



            </Grid>

            <Grid item xs={12} sm={12}>

                <TextField
                  autoComplete="off"
                  name="license"
                  required
                  fullWidth
                  id="license"
                  label="Cedula Profesional / Numero Matricula / Colegiatura"
                />

            </Grid>

                <Grid item xs={12} sm={12}>

                <TextField
                  autoComplete="off"
                  name="specialty"
                  required
                  fullWidth
                  id="specialty"
                  label="Especialidad Medica: Ej: Traumatologia"
                />

              </Grid>

            <Grid item xs={12} sm={12}>

                <TextField
                  autoComplete="off"
                  name="education"
                  required
                  fullWidth
                  id="education"
                  label="Universidad de Egreso: Ej: UNAM"
                />

              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Direccion de Correo Electronico"
                  name="email"
                  autoComplete="off"
                />

              </Grid>

              <Grid item xs={12}>

                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="off"
                />

              </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Ya tienes cuenta? Inicia sesion
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}