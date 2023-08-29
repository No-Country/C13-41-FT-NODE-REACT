import React from 'react';
import { Form, Field } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
	Grid,
	TextField,
	IconButton,
	InputAdornment,
	Select,
	MenuItem,
	FormHelperText,
} from '@mui/material';
const basicForm = props => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(show => !show);
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};
	return (
		<Grid container spacing={2} rowSpacing={3}>
			<Grid item xs={12} md={4}>
				<Field
					name='name'
					type='text'
					as={TextField}
					variant='outlined'
					label='Name & Surname'
					id='margin-dense'
					fullWidth
					error={Boolean(props.errors.name) && Boolean(props.touched.name)}
					helperText={Boolean(props.touched.name) && props.errors.name}
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
					name='gen'
					type='select'
					as={Select}
					fullWidth
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					error={Boolean(props.errors.birthdate) && Boolean(props.touched.birthdate)}
					helperText={Boolean(props.touched.birthdate) && props.errors.birthdate}
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
					type='text'
					as={TextField}
					fullWidth
					label='Country'
					error={Boolean(props.errors.country) && Boolean(props.touched.country)}
					helperText={Boolean(props.touched.country) && props.errors.country}
				/>
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
		</Grid>
	);
};

export default basicForm;
