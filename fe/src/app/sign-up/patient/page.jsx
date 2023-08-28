'use client'
import React from 'react';
import BasicForm from '@/components/BasicForm';
import { patientSchema } from '../validations/userPacient';
import { Form, Formik, Field } from 'formik';
import { Button } from '@mui/material';
import { initialValues } from '../validations/initialValuesPatient';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
export default function PacientSingUp() {

  return (
    <Container>
      <Typography variant='h3' mt={4} mb={4}>Register</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={patientSchema}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        
        {({errors, isValid, touched, dirty }) => (
            <Form>

              <BasicForm errors={errors} isValid={isValid}  touched={touched} dirty={dirty}/>
              <Button type='submit'  variant='contained' size='large' disabled={!dirty || !isValid}>
                Submit
               </Button>

            </Form> 
          )}
      </Formik>
    </Container>
  );
}