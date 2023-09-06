'use client';
import { useFilterContext } from '@/contexts/Filters.context';
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	InputAdornment,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import DoctorCard from '../../../Components/Appointments/DoctorCard';

const DoctorsPage = () => {
	const {
		filteredDoctor,
		allDoctors,
		setFilterByCountry,
		filterByCountry,
		setFilterByName,
		filterBySpecialty,
		setFilterBySpecialty,
	} = useFilterContext();

	const countryList = new Set(allDoctors.map(doctor => doctor.country));
	const specialtyList = new Set(allDoctors.map(doctor => doctor.specialty));

	return (
		<Container component={'main'} sx={{ paddingY: 4 }}>
			<Box
				component={'section'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				paddingY={{ xs: 1, sm: 4 }}
				paddingX={1}
			>
				<TextField
					id='outlined-search'
					label='Find professionals by name'
					type='search'
					fullWidth
					onChange={e => setFilterByName(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</Box>
			<Box component={'section'} display={'flex'} flexDirection={{ xs: 'column', sm: 'row' }} gap={4}>
				<Box
					component={'aside'}
					display={'flex'}
					flexDirection={{ xs: 'row', sm: 'column' }}
					gap={2}
					sx={{
						minHeight: { xs: 'auto', sm: '100vh' },
					}}
					paddingX={1}
					width={{ xs: '100%', sm: '30%' }}
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
							{[...specialtyList].map(specialty => (
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
				<Divider orientation='vertical' flexItem />
				<Box component={'section'} width={{ xs: '100%', sm: '70%' }} paddingX={1}>
					<Grid container spacing={2}>
						{filteredDoctor.length > 0 ? (
							filteredDoctor.map(doctor => {
								return (
									<Grid item xs={6} md={4} key={doctor.id}>
										<DoctorCard doctor={doctor} />
										{/* <Button href={`/profile/${doctor.id}`}>View profile</Button> */}
										<Button
											href='#'
											variant='contained'
											className='inter'
											fullWidth
											sx={{
												backgroundColor: colors.buttonIcon,
												color: 'white',
												textTransform: 'none',
												mt: 1,

												':hover': { backgroundColor: colors.buttonIcon },
											}}
											fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
										>
											Book now
										</Button>
									</Grid>
								);
							})
						) : (
							<Grid item xs={12}>
								<Typography
									variant='h6'
									className='inter'
									color={colors.text}
									backgroundColor={colors.inputBackground}
									borderRadius={2}
									textAlign={'center'}
									paddingX={2}
									paddingY={1}
									fontSize={{ xs: titleFontSizeMobile.h6, sm: titleFontSizeDesktop.h6 }}
								>
									No doctors available
								</Typography>
							</Grid>
						)}
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default DoctorsPage;
