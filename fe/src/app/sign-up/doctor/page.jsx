'use client';
import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import '@fontsource/poppins';
import { doctorSchema } from '../validations/userDoctor';
import BasicForm from '../../../../Components/BasicForm';
import { initialValues } from '../validations/initialValuesDoctor';
import { useRouter } from 'next/navigation';

export default function DoctorSignUp() {
	const [successSignup, setSuccessSignup] = useState(false);
	const [errorSignup, setErrorSignup] = useState(false);
	const [message, setMessage] = useState(false);

	const { push } = useRouter();
	const shouldRedirect = successSignup && !message;

	useEffect(() => {
		if (shouldRedirect) {
			push('/sign-in');
		}
	}, [shouldRedirect]);

	return (
		<Container>
			<Typography variant='h3' mt={4} mb={4}>
				Register
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={doctorSchema}
				onSubmit={async (values, formikHelpers) => {
					const userData = {
						fullname: values.fullname,
						password: values.password,
						email: values.email,
						country: values.country,
						gender: values.gender,
						nid: values.nid,
						profesionalid: values.profesionalid,
						birthdate: values.birthdate,
					};

					try {
						const response = await fetch('https://mecharcovz-be.onrender.com/api/v1/medic', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(userData),
						});

						const data = await response.json();

						console.log(data);
						setSuccessSignup(true);
						setTimeout(() => {
							setSuccessSignup(false);
							setMessage(true);
							setTimeout(() => {
								setMessage(false);
							}, 2000);
						}, 3000);
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
									name='profesionalid'
									type='text'
									as={TextField}
									variant='outlined'
									label='Profesional License'
									fullWidth
									error={Boolean(errors.profesionalid) && Boolean(touched.profesionalid)}
									helperText={Boolean(touched.profesionalid) && errors.profesionalid}
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
				autoHideDuration={3000}
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
				autoHideDuration={3000}
				message='Error creating account'
				onClose={() => {}}
			>
				<Alert severity='error' sx={{ width: '100%' }}>
					Error creating account
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={message}
				autoHideDuration={3000}
				message='Redirecting to login'
				onClose={() => {}}
			>
				<Alert severity='info' sx={{ width: '100%' }}>
					Redirecting to login
				</Alert>
			</Snackbar>
		</Container>
	);
}
