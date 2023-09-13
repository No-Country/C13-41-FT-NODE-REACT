'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
	Container,
	Button,
	Typography,
	Grid,
	Checkbox,
	TextField,
	InputAdornment,
	IconButton,
	Box,
	Stack,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import { useAuth } from '@/contexts/Auth.context';
import SigninFormAlerts from '../../../Components/SigninFormAlerts';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import jwtDecode from 'jwt-decode';

const SignInPage = () => {
	const [successSignin, setSuccessSignin] = useState(false);
	const [errorSignin, setErrorSignin] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [redirecting, setRedirecting] = useState(false);
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(show => !show);
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	// Utilizo login para setear el token y los datos del usuario una vez logueado
	const { login } = useAuth();
	const { push } = useRouter();

	const initialValues = {
		email: '',
		password: '',
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

			if (response?.error) {
				throw new Error('Credenciales inválidas');
			}

			const dataUser = await response.json();

			const decoded = jwtDecode(dataUser.data.token);

			// Almaceno el token y los datos en un estado y en el local storage por si cierra la sesión
			if (data.user === 'patient') {
				login({ token: dataUser.data.token, data: decoded.patient, type: 'patient' });
			} else if (data.user === 'doctor') {
				login({ token: dataUser.data.token, data: decoded.medic, type: 'medic' });
			}

			// Muestro el login exitoso
			setSuccessSignin(true);
			setTimeout(() => {
				setSuccessSignin(false);
				setRedirecting(true);
				setTimeout(() => {
					setRedirecting(false);
					push('/home');
				}, 2000);
			}, 2000);
		} catch (error) {
			console.log(error);
			setErrorMessage(error.error);
			setErrorSignin(true);
			setTimeout(() => {
				setErrorSignin(false);
			}, 5000);
		}
	};

	const onSubmit = (values, props) => {
		console.log(values);
		signIn(values);
	};

	return (
		<Container sx={{ paddingY: 4 }}>
			<Typography
				variant='h1'
				fontSize={{ xs: titleFontSizeMobile.h1, md: titleFontSizeDesktop.h1 }}
				color={colors.text}
				textAlign={'center'}
				fontWeight={700}
				className='inter'
			>
				Sign in
			</Typography>
			<Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={onSubmit}>
				{({ errors, touched, dirty, isValid }) => (
					<Form>
						<Grid container alignItems='center' justifyContent='center' paddingY={4} spacing={8}>
							<Grid item xs={12} sm={10} md={6}>
								<Field
									as={TextField}
									name='email'
									type='email'
									placeholder='Email'
									className='inter'
									fullWidth
									error={Boolean(errors.email) && Boolean(touched.email)}
									helperText={Boolean(touched.email) && errors.email}
								/>
								<Typography variant='body2' paddingY={2}>
									<Link href='/' className='inter'>
										Did you Forgot your password?
									</Link>
								</Typography>
								<Field
									name='password'
									error={Boolean(errors.password) && Boolean(touched.password)}
									helperText={Boolean(touched.password) && errors.password}
									type={showPassword ? 'text' : 'password'}
									as={TextField}
									variant='outlined'
									label='Password'
									className='inter'
									fullWidth
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge='end'
												>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									}}
								/>

								<Box
									sx={{ display: 'flex', flexDirection: 'column', paddingY: 4, alignItems: 'center' }}
									role='group'
									aria-labelledby='my-radio-group'
								>
									<Typography
										variant='h4'
										color={colors.text}
										className='inter'
										fontWeight={400}
										paddingY={2}
										fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
									>
										Login as
									</Typography>
									<Stack
										direction={'row'}
										spacing={2}
										sx={{ justifyContent: 'center', alignItems: 'center' }}
									>
										<label className='inter'>
											<Field as={Checkbox} type='radio' name='user' id='patient' value='patient' />
											Patient
										</label>

										<label className='inter'>
											<Field as={Checkbox} type='radio' name='user' value='doctor' id='doctor' />
											Doctor
										</label>
									</Stack>
								</Box>

								<Button
									type='submit'
									variant='contained'
									className='inter'
									fullWidth
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
									Submit
								</Button>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
			<SigninFormAlerts
				successSignin={successSignin}
				errorSignin={errorSignin}
				redirecting={redirecting}
				errorMessage={errorMessage}
			/>
		</Container>
	);
};

export default SignInPage;
