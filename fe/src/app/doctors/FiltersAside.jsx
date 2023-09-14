import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React from 'react';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';

const FiltersAside = ({
	filterByCountry,
	setFilterByCountry,
	filterBySpecialty,
	setFilterBySpecialty,
	countryList,
	specialties,
}) => {
	return (
		<Box
			component={'aside'}
			display={'flex'}
			flexDirection={{ xs: 'row', sm: 'column' }}
			gap={2}
			sx={{
				minHeight: { xs: 'auto', sm: '100vh' },
			}}
			paddingX={1}
			width={{ xs: '100%', sm: '20%' }}
		>
			<Box display={'flex'} flexDirection={'column'} rowGap={1} width={'100%'}>
				<Typography
					variant='h5'
					className='inter'
					fontWeight={500}
					color={colors.text}
					fontSize={{ xs: titleFontSizeMobile.h5, sm: titleFontSizeDesktop.h5 }}
				>
					Country
				</Typography>
				<TextField
					id='demo-simple-select'
					select
					label='Select a Country'
					value={filterByCountry}
					onChange={e => setFilterByCountry(e.target.value)}
					fullWidth
					SelectProps={{
						MenuProps: {
							disableScrollLock: true,
						},
					}}
				>
					{[...countryList].map(country => (
						<MenuItem key={country} value={country}>
							{country}
						</MenuItem>
					))}
				</TextField>
				<Button
					variant='text'
					size='small'
					sx={{
						width: '100%',
						textTransform: 'none',
						backgroundColor: colors.inputBackground,
						color: colors.text,
						':hover': {
							backgroundColor: colors.inputBackground,
						},
					}}
					onClick={() => setFilterByCountry('')}
				>
					Clear country
				</Button>
			</Box>

			<Box display={'flex'} flexDirection={'column'} rowGap={1} width={'100%'}>
				<Typography
					variant='h5'
					className='inter'
					fontWeight={500}
					color={colors.text}
					fontSize={{ xs: titleFontSizeMobile.h5, sm: titleFontSizeDesktop.h5 }}
				>
					Specialty
				</Typography>
				<TextField
					id='demo-simple-select'
					select
					label='Select a Specialty'
					value={filterBySpecialty}
					onChange={e => setFilterBySpecialty(e.target.value)}
					fullWidth
					SelectProps={{
						MenuProps: {
							disableScrollLock: true,
						},
					}}
				>
					{specialties.map(specialty => (
						<MenuItem key={specialty} value={specialty}>
							{specialty}
						</MenuItem>
					))}
				</TextField>
				<Button
					variant='text'
					size='small'
					sx={{
						width: '100%',
						textTransform: 'none',
						backgroundColor: colors.inputBackground,
						color: colors.text,
						':hover': {
							backgroundColor: colors.inputBackground,
						},
					}}
					onClick={() => setFilterBySpecialty('')}
				>
					Clear specialty
				</Button>
			</Box>
		</Box>
	);
};

export default FiltersAside;
