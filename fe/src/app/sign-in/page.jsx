'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
	Container,
	Button,
	Typography,
	Grid,
	Snackbar,
	Checkbox,
	Alert,
	TextField,
	FormControlLabel,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import { useAuth } from '@/contexts/Auth.context';

const SignInPage = () => {
	const [successSignIn, setSuccessSignIn] = useState(false);

	// Utilizo login para setear el token y los datos del usuario una vez logueado
	const { login } = useAuth();
	const { push } = useRouter();

	useEffect(() => {
		if (successSignIn) {
			push('/home');
		}
	}, [successSignIn]);

	const initialValues = {
		email: '',
		password: '',
		remember: false,
	};

	const signInSchema = yup.object({
		email: yup.string('enter your email').email('Invalid email').required('Email is required'),
		password: yup
			.string('Enter your password')
			.min(8, 'Password should be of minimum 8 characters length')
			.required('Password is required'),
		user: yup.string().oneOf(['patient', 'doctor'], 'Select one user').required(''),
	});

	const signIn = async data => {
		if (!data) return;

		const userLogin = {
			email: data.email,
			password: data.password,
		};

		try {
			let endpoint = '';
			if (data.user === 'patient') {
				endpoint = 'https://mecharcovz-be.onrender.com/api/v1/auth/patient';
			} else {
				endpoint = 'https://mecharcovz-be.onrender.com/api/v1/auth/medic';
			}

			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userLogin),
			});
			const dataUser = await response.json();
			console.log(dataUser);
			if (response.status === 201) {
				const decoded = jwtDecode(dataUser.data.token);

				// Almaceno el token y los datos en un estado y en el local storage por si cierra la sesión
				if (data.user === 'patient') {
					login({ token: dataUser.data.token, data: decoded.patient });
				} else if (data.user === 'doctor') {
					login({ token: dataUser.data.token, data: decoded.medic });
				}

				setSuccessSignIn(true);
			}

			if (response.status === 400) {
				console.log('error login');
			}
		} catch (errors) {
			console.log(errors.message);
		}
	};

	const onSubmit = (values, props) => {
		console.log(values);
		setTimeout(() => {
			props.resetForm();
			props.setSubmitting(false);
		}, 2000);
		signIn(values);
	};

	return (
		<Container>
			<Typography variant='h4' mt={10} mb={10} className={styles.title}>
				Login
			</Typography>
			<div className={styles.logoContainer}>
				<img alt='Logo' className={styles.logo} />
			</div>
			<Typography>
				<Link href='/' className={styles.back}>
					Back
				</Link>
			</Typography>
			<Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={onSubmit}>
				{({ errors, touched, dirty, isValid, isSubmitting }) => (
					<Form>
						<Grid container alignItems='center' justifyContent='center' paddingY={3} spacing={6}>
							<Grid item xs={6} md={12}>
								<Field
									as={TextField}
									name='email'
									type='email'
									placeholder='Email'
									/* autoComplete='off' */
									fullWidth
									error={Boolean(errors.email) && Boolean(touched.email)}
									helperText={Boolean(touched.email) && errors.email}
								/>

								<Typography>
									<Link href='/forgot-password' className={styles.text}>
										Did you Forgot your password?
									</Link>
								</Typography>
								<Field
									as={TextField}
									type='password'
									name='password'
									placeholder='Password'
									fullWidth
									error={Boolean(errors.password) && Boolean(touched.password)}
									helperText={Boolean(touched.password) && errors.password}
								/>

								<Typography
									variant='h4'
									color={colors.text}
									textAlign={'center'}
									paddingY={4}
									fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
								>
									Login as
								</Typography>
								<div role='group' aria-labelledby='my-radio-group'>
									<label>
										<Field as={Checkbox} type='radio' name='user' id='patient' value='patient' />
										PATIENT
									</label>

									<label>
										<Field as={Checkbox} type='radio' name='user' value='doctor' id='doctor' />
										DOCTOR
									</label>
								</div>
							</Grid>
							<Grid item xs={6} md={12}>
								<Button
									color='success'
									variant='contained'
									fullWidth
									size='large'
									type='submit'
									disabled={!dirty || !isValid || isSubmitting}
								>
									{isSubmitting ? 'Loading' : 'sign in'}
								</Button>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default SignInPage;
