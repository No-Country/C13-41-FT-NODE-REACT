'use client';
import React, { useState, useEffect } from 'react';
import BasicForm from '../../../../Components/BasicForm';
import { patientSchema } from '../validations/userPacient';
import { Form, Formik } from 'formik';
import { Button, Snackbar, Alert } from '@mui/material';
import { initialValues } from '../validations/initialValuesPatient';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormAlerts from '../../../../Components/FormAlerts';
import '@fontsource/poppins';
import { useRouter } from 'next/navigation';
export default function PacientSingUp() {
	const [successSignup, setSuccessSignup] = useState(false);
	const [errorSignup, setErrorSignup] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [redirecting, setRedirecting] = useState(false);

	const { push } = useRouter();

	useEffect(() => {
		if (successSignup) {
			setTimeout(() => {
				push('/sign-in');
			}, 5000);
		}
	}, [successSignup]);

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
						fullname: values.fullname,
						password: values.password,
						email: values.email,
						country: values.country,
						gender: values.gender,
						nid: values.phone,
						avatar: '',
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

						console.log(data);
						setSuccessSignup(true);
						setTimeout(() => {
							setSuccessSignup(false);
							setRedirecting(true);
							setTimeout(() => {
								setRedirecting(false);
							}, 2000);
						}, 3000);

						formikHelpers.resetForm();
					} catch (error) {
						setErrorMessage(error.error);
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
							Create my account
						</Button>
					</Form>
				)}
			</Formik>
<<<<<<< HEAD
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
					{errorMessage ? errorMessage : 'Error creating account. Try again.'}
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={redirecting}
				autoHideDuration={3000}
				message='Redirecting to login'
				onClose={() => {}}
			>
				<Alert severity='info' sx={{ width: '100%' }}>
					Redirecting to login
				</Alert>
			</Snackbar>
=======
			<FormAlerts successSignup={successSignup} errorSignup={errorSignup} message={message}/>
>>>>>>> 1c4e4e1b6155af8aa4fe93857f94d477190793b9
		</Container>
	);

}
