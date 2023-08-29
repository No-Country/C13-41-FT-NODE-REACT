'use client';
import React, { useState } from 'react';
import BasicForm from '@/components/BasicForm';
import { patientSchema } from '../validations/userPacient';
import { Form, Formik, Field } from 'formik';
import { Button, Snackbar, Alert } from '@mui/material';
import { initialValues } from '../validations/initialValuesPatient';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
export default function PacientSingUp() {
	const [successSignup, setSuccessSignup] = useState(false);
	const [errorSignup, setErrorSignup] = useState(false);
	const [message, setMessage] = useState(false);

	return (
		<Container>
			<Typography variant='h3' mt={4} mb={4}>
				Register
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={patientSchema}
				onSubmit={async (values, formikHelpers) => {
					const userData = {
						fullname: values.name,
						password: values.password,
						email: values.email,
						country: values.country,
						gender: values.gen,
						nid: values.phone,
						avatar:
							'data:image/png;base64,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',
						birthdate: values.birthdate,
					};

					try {
						const response = await fetch('https://mecharcovz-be.onrender.com/api/v1/patient', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(userData),
						});

						const data = await response.json();

						if (response.ok) {
							console.log(data);
							setSuccessSignup(true);
							setTimeout(() => {
								setSuccessSignup(false);
							}, 3000);
							setMessage(true);
							setTimeout(() => {
								setMessage(false);
							}, 2000);
							redirect('/sign-in', replace);
						} else {
							setErrorSignup(true);
							setTimeout(() => {
								setErrorSignup(false);
							}, 3000);
						}

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
				{({ errors, isValid, touched, dirty }) => (
					<Form>
						<BasicForm errors={errors} isValid={isValid} touched={touched} dirty={dirty} />
						<Button type='submit' variant='contained' size='large' disabled={!dirty || !isValid}>
							Submit
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
