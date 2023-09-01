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
				{({ errors, isValid, touched, dirty }) => (
					<Form>
						<BasicForm errors={errors} isValid={isValid} touched={touched} dirty={dirty} />
						<Button type='submit' variant='contained' size='large' disabled={!dirty || !isValid}>
							Create my account
						</Button>
					</Form>
				)}
			</Formik>
			<FormAlerts successSignup={successSignup} errorSignup={errorSignup} message={message}/>
		</Container>
	);

}
