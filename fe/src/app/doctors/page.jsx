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
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '../colors';
import DoctorCard from '../../../Components/Appointments/DoctorCard';
import { getAllSpecialities } from '@/lib/getAllSpecialities';
import { useRouter } from 'next/navigation';
const DoctorsPage = () => {
	const { push } = useRouter();
	const [specialties, setSpecialties] = useState([]);
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

	const fetchSpecialties = async () => {
		try {
			const data = await getAllSpecialities();
			const specialtiesList = data.data.specialties.map(specialty => specialty.name);
			setSpecialties(specialtiesList);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchSpecialties();
	}, []);
	const handdleCreateService = async  (doctor) => { 
		try {
			const response = await fetch(`https://mecharcovz-be.onrender.com/api/v1/service`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(
				{
					description: 'Appointment',
					price: 2000,
					medicId: doctor.id,
					specialtyId: doctor.specialties[0].id
				}
			)
		
		});
		const data = await response.json()
		const newService = data.data.newService
		console.log(newService.id);
		push(`/appointments/${doctor.email}/${newService.id}`)
		} catch (error) {
			console.error
		}
	}
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
				<Divider orientation='vertical' flexItem />
				<Box component={'section'} width={{ xs: '100%', sm: '80%' }} paddingX={1}>
					<Grid container spacing={2}>
						{filteredDoctor?.length > 0 ? (
							filteredDoctor.map(doctor => {
								return (
									<Grid item xs={6} md={4} key={doctor.id}>
										<DoctorCard doctor={doctor} />
										<Button
											// href={`/appointments/${doctor.email}`}
											onClick={() => handdleCreateService(doctor)}
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
