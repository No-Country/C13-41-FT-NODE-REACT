'use client';
import React, { useState } from 'react';
import { Container, Button, Typography, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import '@fontsource/poppins';
import { doctorSchema } from '../validations/userDoctor';
import BasicForm from '@/components/BasicForm';
import { initialValues } from '../validations/initialValuesDoctor';
export default function DoctorSignUp() {
	const [successSignup, setSuccessSignup] = useState(false);
	const [errorSignup, setErrorSignup] = useState(false);

	return (
		<Container>
			<Typography variant='h3' mt={4} mb={4}>
				Register
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={doctorSchema}
				onSubmit={async (values, formikHelpers) => {
					try {
						await new Promise(resolve => setTimeout(resolve, 500));
						console.log(values);
						setSuccessSignup(true);
						setTimeout(() => {
							setSuccessSignup(false);
						}, 5000);
						formikHelpers.resetForm();
					} catch (error) {
						console.log(error);
						setErrorSignup(true);
						setTimeout(() => {
							setErrorSignup(false);
						}, 5000);
					}
				}}
			>
				{({ errors, touched, dirty, isValid }) => (
					<Form>
						<BasicForm errors={errors} isValid={isValid} touched={touched} dirty={dirty} />
						<Grid container paddingY={3} spacing={2} rowSpacing={3}>
							<Grid item xs={6} md={6}>
								<Field
									name='license'
									type='text'
									as={TextField}
									variant='outlined'
									label='License'
									fullWidth
									error={Boolean(errors.license) && Boolean(touched.license)}
									helperText={Boolean(touched.license) && errors.license}
								/>
							</Grid>
						</Grid>
						<Button type='submit' variant='contained' size='large' disabled={!dirty || !isValid}>
							Create my account
						</Button>
					</Form>
				)}
			</Formik>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={successSignup}
				autoHideDuration={5000}
				message='Account created successfully'
				onClose={() => {}}
			>
				<Alert severity='success' sx={{ width: '100%' }}>
					Account created
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={errorSignup}
				autoHideDuration={5000}
				message='Error creating account'
				onClose={() => {}}
			>
				<Alert severity='error' sx={{ width: '100%' }}>
					Error creating account
				</Alert>
			</Snackbar>
		</Container>
	);
}
