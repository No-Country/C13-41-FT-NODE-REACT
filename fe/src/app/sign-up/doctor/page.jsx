'use client';
import React from 'react';
import { Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import '@fontsource/poppins';
import { doctorSchema } from '../validations/userDoctor';
export default function DoctorSignUp() {
	const countries = [
		{ value: 'Venezuela', label: 'Venezuela' },
		{ value: 'Colombia', label: 'Colombia' },
		{ value: 'Mexico', label: 'Mexico' },
		{ value: 'Bolivia', label: 'Bolivia' },
		{ value: 'Chile', label: 'Chile' },
		{ value: 'Argentina', label: 'Argentina' },
		{ value: 'Uruguay', label: 'Uruguay' },
		{ value: 'Peru', label: 'Peru' },
		{ value: 'Ecuador', label: 'Ecuador' },
		{ value: 'El Salvador', label: 'El Salvador' },
		{ value: 'Costa Rica', label: 'Costa Rica' },
		{ value: 'Guatemala', label: 'Guatemala' },
		{ value: 'Honduras', label: 'Honduras' },
		{ value: 'Nicaragua', label: 'Nicaragua' },
	];

	return (
		<Box
			component={'main'}
			paddingX={'2rem'}
			paddingY={'2rem'}
			sx={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh' }}
		>
			<Typography variant='h1' component='h1' align='left' fontSize='2rem' fontFamily='bold'>
				Register
			</Typography>
			<Formik
				initialValues={{
					name: '',
					phone: '',
					email: '',
					password: '',
					country: '',
					license: '',
					gender: '',
					birthdate: '',
				}}
				validationSchema={doctorSchema}
				onSubmit={(values, formikHelpers) => {
					console.log(values);
					formikHelpers.resetForm();
				}}
			>
				{({ errors, touched, dirty, isValid }) => (
					<Form>
						<Grid container gridTemplateColumns={'repeat(2, 1fr)'} gap={4}>
							<Field
								id='name'
								name='name'
								type='text'
								as={TextField}
								variant='outlined'
								label='Fullname'
								required
								error={Boolean(errors.name) && Boolean(touched.name)}
								helperText={Boolean(touched.name) && errors.name}
							/>
							<Field
								id='birthdate'
								name='birthdate'
								type='date'
								as={TextField}
								variant='outlined'
								label='Birthdate'
								required
								error={Boolean(errors.birthdate) && Boolean(touched.birthdate)}
								helperText={Boolean(touched.birthdate) && errors.birthdate}
							/>
							<Field
								id='phone'
								name='phone'
								type='tel'
								as={TextField}
								label='Phone'
								error={Boolean(errors.phone) && Boolean(touched.phone)}
								helperText={Boolean(touched.phone) && errors.phone}
							/>
							<Field
								id='email'
								name='email'
								type='email'
								as={TextField}
								variant='outlined'
								label='Email'
								required
								error={Boolean(errors.email) && Boolean(touched.email)}
								helperText={Boolean(touched.email) && errors.email}
							/>
							<Field
								id='password'
								name='password'
								type='password'
								as={TextField}
								variant='outlined'
								label='Password'
								error={Boolean(errors.password) && Boolean(touched.password)}
								helperText={Boolean(touched.password) && errors.password}
							/>
							<Field
								id='gender'
								name='gender'
								type='select'
								as={Select}
								error={Boolean(errors.gender) && Boolean(touched.gender)}
								helperText={Boolean(touched.gender) && errors.gender}
								SelectProps={{ displayEmpty: true }}
							>
								<MenuItem value='Gender'>Gender</MenuItem>
								<MenuItem value='Male'>Male</MenuItem>
								<MenuItem value='Female'>Female</MenuItem>
								<MenuItem value='Other'>Other</MenuItem>
							</Field>
							<Field
								id='country'
								name='country'
								type='select'
								as={Select}
								error={Boolean(errors.country) && Boolean(touched.country)}
								helperText={Boolean(touched.country) && errors.country}
							>
								<MenuItem value='Country' selected>
									Country
								</MenuItem>
								{countries.map((country, index) => {
									return (
										<MenuItem key={index} value={country.value}>
											{country.label}
										</MenuItem>
									);
								})}
							</Field>
							<Field
								id='license'
								name='license'
								as={TextField}
								variant='outlined'
								label='License'
								error={Boolean(errors.license) && Boolean(touched.license)}
								helperText={Boolean(touched.license) && errors.license}
							/>
						</Grid>
						<button type='submit' disabled={!dirty || !isValid}>
							Create my account
						</button>
					</Form>
				)}
			</Formik>
		</Box>
	);
}
