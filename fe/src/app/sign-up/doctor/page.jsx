'use client';
import React, { useState } from 'react';
import { Container, Button, Typography, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import '@fontsource/poppins';
import { doctorSchema } from '../validations/userDoctor';
import BasicForm from '../../../../Components/BasicForm';
import { initialValues } from '../validations/initialValuesDoctor';
import { useRouter } from 'next/navigation';
import FormAlerts from '../../../../Components/FormAlerts';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
export default function DoctorSignUp() {
	const [successSignup, setSuccessSignup] = useState(false);
	const [errorSignup, setErrorSignup] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [redirecting, setRedirecting] = useState(false);

	const { push } = useRouter();

	return (
		<Container sx={{ paddingY: 4 }}>
			<Typography
				variant='h1'
				fontSize={{ xs: titleFontSizeMobile.h1, md: titleFontSizeDesktop.h1 }}
				color={colors.text}
				fontWeight={700}
				className='inter'
			>
				Register as doctor
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
							setRedirecting(true);
							setTimeout(() => {
								setRedirecting(false);
								push('/sign-in');
							}, 2000);
						}, 2000);

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
				{({ errors, touched, dirty, isValid }) => (
					<Form>
						<BasicForm errors={errors} isValid={isValid} touched={touched} dirty={dirty} />
						<Grid container paddingBottom={3} spacing={2} rowSpacing={3}>
							<Grid item xs={12} md={6}>
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
