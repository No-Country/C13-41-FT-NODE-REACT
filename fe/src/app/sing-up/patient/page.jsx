'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { patientSchema } from '../validations/userPacient';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import  {DateField}  from '@mui/x-date-pickers/DateField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid } from '@mui/material';
import  Checkbox  from '@mui/icons-material';
export default function PacientSingUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword  = () => {
    setShowPassword((show) => !show)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Typography variant='h3' mt={4} mb={4}>Register</Typography>
      
      <Formik
        initialValues={{
          name: '',
          birthdate: '',
          phone: '',
          email: '',
          password: '',
          // checkBox: true,
        }}
        validationSchema={patientSchema}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        
          {({errors, isValid, touched, dirty }) => (
            <Form>
              <Grid container spacing={2}  rowSpacing={3}>
              <Grid item xs={12} md={4}>

                <Field
                  name='name'
                  type='text'
                  as={TextField}
                  variant='outlined'
                  label='Name & Surname'
                  id="margin-dense"
                  fullWidth
                  error={Boolean(errors.name) && Boolean(touched.name)}
                  helperText={Boolean(touched.name) && errors.name}
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
              <Field
                name='birthdate'
                type='date'
                as={TextField}
                fullWidth
                label='birthdate'
                error={Boolean(errors.birthdate) && Boolean(touched.birthdate)}
                helperText={Boolean(touched.birthdate) && errors.birthdate}
              />
              </Grid>
              <Grid item xs={6} md={4}>
              <Field
                name='gen'
                type='select'
                as={Select}
                fullWidth
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                error={Boolean(errors.birthdate) && Boolean(touched.birthdate)}
                helperText={Boolean(touched.birthdate) && errors.birthdate}
              >
                <MenuItem value=''>Gender</MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
                <MenuItem value='Other'>Other</MenuItem>
              </Field>
              </Grid>
              <Grid item xs={6} md={6}>
              <Field
                name='country'
                type='select'
                as={Select}
                fullWidth
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                error={Boolean(errors.country) && Boolean(touched.country)}
                helperText={Boolean(touched.country) && errors.country}
              >
                <MenuItem value=''>Country</MenuItem>
                <MenuItem value='Male'>Venezuela</MenuItem>
                <MenuItem value='Female'>Colombia</MenuItem>
                <MenuItem value='Other'>Mexico</MenuItem>
                <MenuItem value='Other'>Bolivia</MenuItem>
                <MenuItem value='Other'>Chile</MenuItem>
                <MenuItem value='Other'>Argentina</MenuItem>
                <MenuItem value='Other'>Urugay</MenuItem>
                <MenuItem value='Other'>Peru</MenuItem>
                <MenuItem value='Other'>Ecuador</MenuItem>
                <MenuItem value='Other'>El Salvador</MenuItem>
                <MenuItem value='Other'>Costa Rica</MenuItem>
                <MenuItem value='Other'>Guatemala</MenuItem>
                <MenuItem value='Other'>Honduras</MenuItem>
                <MenuItem value='Other'>Nicaragua</MenuItem>
              </Field>
              </Grid>
              <Grid item xs={6} md={6}>
              <Field
                name='phone'
                type='number'
                as={TextField}
                fullWidth
                label='Phone'
                error={Boolean(errors.phone) && Boolean(touched.phone)}
                helperText={Boolean(touched.phone) && errors.phone}
              />
                
              </Grid>
              {/* More fields... */}
              <Grid item xs={6} md={6}>
              <Field
                name='email'
                type='email'
                as={TextField}
                fullWidth
                label='Email'
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
                
              </Grid>  
              <Grid item xs={12} md={6}>
              <Field
                name='password'
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
                type={showPassword ? 'text' : 'password'}
                as={TextField}
                variant='outlined'
                label='Password'
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              </Grid> 
                {/* <Grid item xs={6} md={6}>
                <Field
                  name='checkBox'
                  type='checkbox'
                  label='hi'
                  error={Boolean(errors.checkBox)}
                  // helperText={Boolean(touched.checkbox) && errors.checkbox}
                >
                  {({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                        />
                      }
                      label='Remember Me'
                    />
                  )}
                </Field> 
                </Grid>  */}
              {/* Remember Me Checkbox */}
              {/* Submit Button */}
            </Grid>  
              <Button type='submit' variant='contained' size='large' disabled={!dirty || !isValid}>
                Submit
              </Button>
            </Form>
          )}
      </Formik>
    </Container>
  );
}
