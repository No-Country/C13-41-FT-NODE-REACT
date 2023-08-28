'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import * as yup from 'yup';
import { Router } from 'next/router';
const SignInPage = () => {
	const [fieldErrors, setFieldErrors] = useState({});

	// Datos de ejemplo hasta tener la API
	const successLogin = {
		data: { patient: 'paciente' },
		message: 'success login',
	};
	const errorLogin = {
		error: 'duplicated',
		message: 'email was duplicate',
	};

	const validateSignInData = async data => {
		const signInSchema = yup.object({
			email: yup.string().email('Invalid email').required('Email is required'),
			password: yup.string().required('Password is required'),
			user: yup.string().oneOf(['patient', 'doctor'], 'Select one user').required(''),
		});

		await signInSchema.validate(data, { abortEarly: false });
	};

	const signIn = async data => {
		if (!data) return;

		try {
			await validateSignInData(data);

			let endpoint = '';
			if (data.user === 'patient') {
				endpoint = '/api/login/patient';
			} else {
				endpoint = '/api/login/doctor';
			}

			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				console.log(successLogin.message);
				// toast
				Router.push('/');
			}

			if (response.status === 404) {
				console.log(errorLogin.message);
			}
		} catch (validationErrors) {
			const newFieldErrors = {};
			validationErrors.inner.forEach(error => {
				newFieldErrors[error.path] = error.message;
			});

			setFieldErrors(newFieldErrors);
			setTimeout(() => {
				setFieldErrors({});
			}, 3000);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { email, password, user } = e.target;

		const signInData = {
			email: email.value,
			password: password.value,
			user: user.value,
		};

		signIn(signInData);
	};

	return (
		<main className={styles.main}>
			<Link href='/' className={styles.back}>
				Back
			</Link>
			<div className={styles.container}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h1 className={styles.title}>Login</h1>
					<div className={styles.logo}>Logo</div>
					<div className={styles.inputContainer}>
						<input type='email' className={styles.input} placeholder='Email' name='email' />
						{fieldErrors.email && <p className={styles.error}>{fieldErrors.email}</p>}
					</div>
					<div className={styles.inputContainer}>
						<input type='password' className={styles.input} placeholder='Password' name='password' />
						{fieldErrors.password && <p className={styles.error}>{fieldErrors.password}</p>}
					</div>
					<div className={styles.inputContainer}>
						<h4>Login as</h4>
						<div className={styles.linkContainer}>
							<div className={styles.radioContainer}>
								<input type='radio' id='patient' name='user' value='patient' />
								<label htmlFor='patient' className={styles.label}>
									Patient
								</label>
							</div>
							<div className={styles.radioContainer}>
								<input type='radio' id='doctor' name='user' value='doctor' />
								<label htmlFor='doctor' className={styles.label}>
									Doctor
								</label>
							</div>
						</div>
						{fieldErrors.user && <p className={styles.error}>{fieldErrors.user}</p>}
					</div>
					<Link href='/forgot-password' className={styles.text}>
						Forgot your password
					</Link>

					<button type='submit' className={styles.button}>
						Log in
					</button>
				</form>
			</div>
		</main>
	);
};

export default SignInPage;
