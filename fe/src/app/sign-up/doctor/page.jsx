"use client";

import React from 'react'
import styled from '@emotion/styled'
import { TextField } from '@mui/material';
import { useFormik } from "formik";
import '@fontsource/poppins';

const SignUpContainer = styled ("section") ({

  display: "flex",
  flexDirection: "column",

});

const Title = styled ("H1") ({

  fontFamily: "Poppins",
  fontWeight: "500",
  fontSize: "32px",
  lineHeight: "48px",
  color: "#131313",
  textAlign: "center",
  userSelect: "none",
  
});

const Form = styled ("form") ({

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  
});

const ChildContainer = styled ("div") ({

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "10px 0px",
  
});

const Button = styled ("button") ({

  width: "300px",
  height: "60px",
  
});

export default function DoctorSignUp () {

  const formik = useFormik ({

    initialValues: { fullname: "", phone: "", email: "", password: "", country: "", resume: "", license: "", gender: "", birthdate: "",  },

    onSubmit: values => {

      const data = JSON.stringify(values);
      console.log (data);
      
    }

  });

  return (

    <SignUpContainer>
      <Title>Register</Title>
      <Form onSubmit={formik.handleSubmit} autoComplete='off'>
        <ChildContainer>
          <TextField onChange={formik.handleChange} value={formik.values.fullname} pattern="[a-zA-Z]+" type='text' id='fullname' name='fullname' label='Please enter your full name' variant='outlined' autoComplete='off' sx={{width: "700px",}} required helperText="Please include any surnames/lastnames"/>
        </ChildContainer>
        <ChildContainer style={{gap: "100px",}}>
          <TextField onChange={formik.handleChange} value={formik.values.phone} type='tel' inputMode='numeric' id='phone' label='Please enter your Telephone' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="Please use international phone number format. Such as '+56977777777'"/>

          <TextField onChange={formik.handleChange} value={formik.values.email} type='email' id='email' label='Please enter your Email Adress' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="Please enter your current email information"/>

        </ChildContainer>

        <ChildContainer style={{gap: "100px",}}>
          <TextField onChange={formik.handleChange} value={formik.values.password} type='password' id='password' label='Please enter your Password' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="Please use at least 8 characters with numbers and a special character"/>

          <TextField onChange={formik.handleChange} value={formik.values.country} type='text' id='country' label='Please enter your Country' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="Please type in your country."/>

        </ChildContainer>

        <ChildContainer style={{gap: "100px",}}>
          <TextField onChange={formik.handleChange} value={formik.values.resume} type='text' id='resume' label='Academic Information' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="For example: MD graduated in 2005 from UCLA."/>

          <TextField onChange={formik.handleChange} value={formik.values.license} type='text' id='license' label='Please enter your medic license number' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="Please type in your license number."/>
          
        </ChildContainer>

        <ChildContainer style={{gap: "100px",}}>

          <TextField onChange={formik.handleChange} value={formik.values.gender} type='text' id='gender' label='Please enter your gender information' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="For example: Masculine, Feminine, or Other."/>

          <TextField onChange={formik.handleChange} value={formik.values.birthdate} type='date' id='birthdate' variant='outlined' autoComplete='off' sx={{width: "300px",}} required helperText="Please enter your birthday information."/>
          
        </ChildContainer>
        <Button type="submit">Create my account</Button>
      </Form>
    </SignUpContainer>

  )

}