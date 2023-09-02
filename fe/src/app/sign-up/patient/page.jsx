'use client';
import React, { useState, useEffect } from 'react';
import BasicForm from '../../../../Components/BasicForm';
import { patientSchema } from '../validations/userPacient';
import { Form, Formik } from 'formik';
import { Button, Snackbar, Alert, colors } from '@mui/material';
import { initialValues } from '../validations/initialValuesPatient';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormAlerts from '../../../../Components/FormAlerts';
import '@fontsource/poppins';
import { useRouter } from 'next/navigation';
import { titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { GridColumnMenuContainer } from '@mui/x-data-grid';
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
		<Container sx={{ paddingY: 4 }}>
			<Typography
				variant='h1'
				fontSize={{ xs: titleFontSizeMobile.h1, md: titleFontSizeDesktop.h1 }}
				color={colors.text}
				fontWeight={700}
				className='inter'
			>
				Register as patient
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
						<Button
							type='submit'
							variant='contained'
							className='inter'
							sx={{
								color: 'white',
								display: 'block',
								textTransform: 'none',
								fontWeight: '500',
								backgroundColor: colors.buttonIcon,
								border: '1px solid',
								borderColor: colors.buttonIcon,
								':hover': {
									backgroundColor: 'transparent',
									borderColor: colors.buttonIcon,
									color: colors.buttonIcon,
								},
							}}
							size='large'
							disabled={!dirty || !isValid}
						>
							Create my account
						</Button>
					</Form>
				)}
			</Formik>
			<FormAlerts
				successSignup={successSignup}
				errorSignup={errorSignup}
				redirecting={redirecting}
				errorMessage={errorMessage}
			/>
		</Container>
	);
}
