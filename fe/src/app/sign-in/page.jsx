"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  Container,
  Button,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { Router } from "next/router";

const SignInPage = () => {
  const [fieldErrors, setFieldErrors] = useState({});

  // Datos de ejemplo hasta tener la API
  const successLogin = {
    data: { patient: "paciente" },
    message: "success login",
  };
  const errorLogin = {
    error: "duplicated",
    message: "email was duplicate",
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const signInSchema = yup.object({
    email: yup
      .string("enter your email")
      .email("Invalid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
	user: yup
	  .string()
	  .oneOf(["patient", "doctor"], "Select one user")
	  .required(""), 
  });



  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Container>
      <Typography variant="h4" mt={10} mb={10} className={styles.title}>
        Login
      </Typography>
	  <div className={styles.logoContainer}>
  <img
  
    alt="Logo"
    className={styles.logo}
  />
</div>
      <Link href="/" className={styles.back}>
        Back
      </Link>
      
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, dirty, isValid }) => (
            <Form>
              <Grid container alignItems="center" justifyContent="center" paddingY={3} spacing={4} rowSpacing={10}>
                <Grid item xs={6} md={6}>
                  <Field 
				  name="email" 
				  type="email" 
				  placeholder="Email" 
				  style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

					<Link href="/forgot-password" className={styles.text}>
            			Did you Forgot your password?
          			</Link>

                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
					style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <h4>Login as</h4>
				  <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field
                      type="radio"
                      name="user"
                      id="patient"
                      value="patient"
                    />
                    PATIENT
                  </label>

                  <label>
                    <Field 
					  type="radio" 
					  name="user" 
					  value="doctor" 
					  id="doctor" 
					  />
                    DOCTOR
                  </label>

				  </div>
                </Grid>
              </Grid>

              <Button
                color="success"
                variant="contained"
                fullWidth
				size='large'
                type="submit"
				disabled={!dirty || !isValid}
              >
                Submit
              </Button>


			  <div className={styles.socialLoginButtons}>
            <span className={styles.loginSpan}>Login In With</span>
            <div className={styles.socialButtonContainer}>
              <Button
                 className={`${styles.socialButton} ${styles.googleButton}`}
                type="button"
               
              >
                Google
              </Button>

              <Button
             	className={`${styles.socialButton} ${styles.appleButton}`}
                type="button"
                
              >
                Apple
              </Button>

              <Button
               className={`${styles.socialButton} ${styles.facebookButton}`}
                type="button"
                
              >
                Facebook
              </Button>
            </div>
          </div>
            </Form>
          )}
        </Formik>
    
    </Container>
  );
};

export default SignInPage;
