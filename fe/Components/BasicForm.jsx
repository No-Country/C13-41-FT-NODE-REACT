import React from 'react';
import { Form, Field } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { colors } from '@/app/colors';
import {
	Grid,
	TextField,
	IconButton,
	InputAdornment,
	Select,
	MenuItem,
	FormHelperText,
	InputLabel,
} from '@mui/material';
import { countries } from '@/app/sign-up/validations/countries';

const basicForm = props => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(show => !show);
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};
	return (
		<Grid container spacing={2} rowSpacing={3} paddingY={3}>
			<Grid item xs={12} md={4}>
				<Field
					name='fullname'
					type='text'
					as={TextField}
					label='Name & Surname'
					id='margin-dense'
					fullWidth
					error={Boolean(props.errors.fullname) && Boolean(props.touched.fullname)}
					helperText={Boolean(props.touched.fullname) && props.errors.fullname}
				/>
			</Grid>

			<Grid item xs={12} md={4}>
				<Field
					name='birthdate'
					type='date'
					as={TextField}
					fullWidth
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					error={Boolean(props.errors.birthdate) && Boolean(props.touched.birthdate)}
					helperText={Boolean(props.touched.birthdate) && props.errors.birthdate}
				/>
				<FormHelperText>Birthdate</FormHelperText>
			</Grid>
			<Grid item xs={6} md={4}>
				<Field
					name='gender'
					type='select'
					as={Select}
					fullWidth
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					MenuProps={{ disableScrollLock: true }}
					error={Boolean(props.errors.gender) && Boolean(props.touched.gender)}
					helperText={Boolean(props.touched.gender) && props.errors.gender}
				>
					<MenuItem value=''>Select</MenuItem>
					<MenuItem value='male'>Male</MenuItem>
					<MenuItem value='female'>Female</MenuItem>
					<MenuItem value='other'>Other</MenuItem>
				</Field>
				<FormHelperText>Gender</FormHelperText>
			</Grid>
			<Grid item xs={6} md={6}>
				<Field
					name='country'
					type='select'
					as={Select}
					fullWidth
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					MenuProps={{ disableScrollLock: true }}
					error={Boolean(props.errors.country) && Boolean(props.touched.country)}
					helperText={Boolean(props.touched.country) && props.errors.country}
				>
					{countries.map((country, idx) => {
						return (
							<MenuItem key={idx} value={country}>
								{country}
							</MenuItem>
						);
					})}
				</Field>
				<FormHelperText>Country</FormHelperText>
			</Grid>
			<Grid item xs={6} md={6}>
				<Field
					name='phone'
					type='number'
					as={TextField}
					fullWidth
					label='Phone'
					error={Boolean(props.errors.phone) && Boolean(props.touched.phone)}
					helperText={Boolean(props.touched.phone) && props.errors.phone}
				/>
			</Grid>
			{/* More fields... */}
			<Grid item xs={6} md={6}>
				<Field
					name='email'
					type='email'
					as={TextField}
					fullWidth
					label='Email'
					error={Boolean(props.errors.email) && Boolean(props.touched.email)}
					helperText={Boolean(props.touched.email) && props.errors.email}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Field
					name='password'
					error={Boolean(props.errors.password) && Boolean(props.touched.password)}
					helperText={Boolean(props.touched.password) && props.errors.password}
					type={showPassword ? 'text' : 'password'}
					as={TextField}
					variant='outlined'
					label='Password'
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
			</Grid>
			<Grid item xs={12} md={6}>
				<Field
					name='nid'
					error={Boolean(props.errors.nid) && Boolean(props.touched.nid)}
					helperText={Boolean(props.touched.nid) && props.errors.nid}
					as={TextField}
					variant='outlined'
					label='National Identification Number (NID)'
					fullWidth
				/>
			</Grid>
		</Grid>
	);
};

export default basicForm;
